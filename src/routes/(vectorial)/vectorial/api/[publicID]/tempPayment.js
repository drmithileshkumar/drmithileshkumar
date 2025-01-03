//@ts-nocheck
import { getDBCollection, getImagesCollection, getUsersCollection, getPaymentsCollection} from '$lib/vectorial/server/mongo'
import { validateSubscription } from './validateSubscription';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import {initializeNewPayment} from '$lib/vectorial/models/payment';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';


// export async function GET({params, request,locals}) { 
//     const publicID = params.publicID;
//     let projection;
//     if(locals.user) {
//         if(locals.user.publicID === publicID) projection = {name: 1, profile: 1, publicID: 1};
//         else projection = {
//             name: 1, profile: 1, publicID: 1
//         }
//     }
//     const usersCollection = await getUsersCollection();
//     const user = await usersCollection.findOne({publicID}, {projection});
//     if(!user) {
//         return error(404, 'User not found') 
//     }
//     return new Response(JSON.stringify(user)) 
// }
//------------------------Razorpay--------------------------
let key_id, key_secret;

if(import.meta.env.VITE_NODE_ENV == 'development') {
    key_id = import.meta.env.VITE_TEST_KEY_ID;
    key_secret = import.meta.env.VITE_TEST_KEY_SECRET;
} else if(import.meta.env.VITE_NODE_ENV == 'production') {
    key_id = import.meta.env.VITE_LIVE_KEY_ID;
    key_secret = import.meta.env.VITE_LIVE_KEY_SECRET;
} 
let rzp = new Razorpay({
    key_id, // your `KEY_ID`
    key_secret // your `KEY_SECRET`
})



const createOrder = async (amount) => { 
    
    try {
        
        let options = {
            amount: amount * 100 * 1.18,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        let order = await rzp.orders.create(options);
        return order;
        // rzp.orders.create(options, function(err, order) {
            
        //     return order;
        // });
    } catch (error) {
        return null;
    }
}
export async function GET({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    // console.log('Getting subscription')
    const publicID = locals.user.publicID;
    const userCollection = await getDBCollection('users');
    const user = await userCollection.findOne({publicID});
    let res = await validateSubscription(user, userCollection);
    console.log(res)
    return new Response(JSON.stringify(res.body), {status: res.status, headers: {
        'cache-control': 'private, max-age=0'
    }})
}

export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    const publicID = locals.user.publicID;
    const {amount, type} = await request.json();
    let order = await createOrder(amount);
    // console.log(order)
    if(!order) {
        return error(500, 'Failed to create order');
    }
    return new Response(JSON.stringify(order))
}
export async function PUT({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized');
    }
    
    const { rzp_payment_id, rzp_order_id, rzp_signature, orderId, amount, type } = await request.json();
    let body = orderId + "|" + rzp_payment_id;
    var expectedSignature = crypto.createHmac('sha256', key_secret)
                                      .update(body.toString())
                                      .digest('hex');
    var message = 'Failed';
    if(expectedSignature === rzp_signature) {
        //save data to mongo
        message = "Success";
    }
    let publicID = locals.user ? locals.user.publicID : 'guest';
    let payment_id = rzp_payment_id, order_id = rzp_order_id, status = message;
    const paymentCollection = await getPaymentsCollection();
    let newPayment = initializeNewPayment(payment_id, order_id, publicID, amount, status);
    const confirm = await paymentCollection.insertOne(newPayment);
    if(!confirm.acknowledged) {
        message = 'Failed to save payment';
    }

    let startdate = new Date();
    let newdate = new Date();
    let advance = type === 'Monthly' ? 30 : 365;
    let expirydate = new Date(newdate.setDate(newdate.getDate() + advance));
    let products = {
        vectorial: {
            subscribed: true,
            valid: true,
            start: {
                date: startdate.getDate(),
                month: startdate.getMonth(),
                year: startdate.getFullYear()
            },
            end: {
                date: expirydate.getDate(),
                month: expirydate.getMonth(),
                year: expirydate.getFullYear()
            },
            type
        }
    }
    const confirmTrial = await userCollection.updateOne({publicID}, {$set: {"products.vectorial": products.vectorial}}, {upsert: true});
    if(!confirmTrial.acknowledged) {
        message= 'Failed to create subscription.'
    }

    return new Response(message)
}