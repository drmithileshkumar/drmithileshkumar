// @ts-nocheck
import { initializeNewDrawing } from '$lib/vectorial/models/vectorial/drawing';
import { getDBCollection } from '$lib/vectorial/server/mongo';
import { validateSubscription } from './validateSubscription';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';
export async function GET({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const userCollection = await getDBCollection('users');
    const user = await userCollection.findOne({publicID});
    const res = await validateSubscription(user, userCollection);
    if(res.status !== 200) {
        return new Response(JSON.stringify(res.body), {status: res.status});
    }
    const drawingsCollection = await getDBCollection('drawings');
    // const projection = {title: 1, tags: 1, teaser: 1, timestamp: 1, author: 1, coverimage: 1, drawingId: 1}
    // const drawings = await drawingsCollection.find({version: "Final", status: "Approved"}).project(projection).toArray();
    const drawings = await drawingsCollection.find({publicID}).toArray();
    if(!drawings) {
        drawings = [];
    }
    return new Response(JSON.stringify(drawings))
}
const updateElements = (drawing) => {
    //elements
    let elemIds = Object.keys(drawing.elements);
    elemIds.forEach(elemId => {
        if(elemId !== 'Layers') {
            if(drawing.elements[elemId].children) {
                drawing.elements[elemId].children.forEach((childId,index) => {
                    drawing.elements[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];
                })
            }
            //fill use filltype
            if(drawing.elements[elemId].fill?.includes('url')) {
                drawing.elements[elemId].fill = drawing.elements[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].fill.split('-')[2];
            }
            //stroke
            if(drawing.elements[elemId].stroke?.includes('url')) {
                drawing.elements[elemId].stroke = drawing.elements[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].stroke.split('-')[2];
            }
            //markerStart, markerMid, markerEnd
            if(drawing.elements[elemId].markerStart?.includes('url')) {
                drawing.elements[elemId].markerStart = drawing.elements[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerStart.split('-')[2];
            }
            if(drawing.elements[elemId].markerMid?.includes('url')) {
                drawing.elements[elemId].markerMid = drawing.elements[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerMid.split('-')[2];
            }
            if(drawing.elements[elemId].markerEnd?.includes('url')) {
                drawing.elements[elemId].markerEnd = drawing.elements[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.elements[elemId].markerEnd.split('-')[2];
            }
            
            //mask
            if(drawing.elements[elemId].mask?.includes('url')) {
                let masks = drawing.elements[elemId].mask.split(' ');
                masks.forEach((mask, index) => {
                    if(mask.includes('url')) {
                        masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];
                    }
                })
                drawing.elements[elemId].mask = masks.join(' ');
            }
            //filter
            if(drawing.elements[elemId].filter?.includes('url')) {
                let filters = drawing.elements[elemId].filter.split(' ');
                filters.forEach((filter, index) => {
                    if(filter.includes('url')) {
                        filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];
                    }
                })
                drawing.elements[elemId].filter = filters.join(' ');
            }
            //layer, parent
            let layer = drawing.elements[elemId].layer?.split('-');
            if(layer && layer.length === 3) {
                drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];
            } else if(layer) {
                drawing.elements[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];
            }
            let parent = drawing.elements[elemId].parent?.split('-');
            if(parent && parent.length === 3) {
                drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];
            } else if(parent && parent.length === 2) {
                drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];
            } else if(parent) {
                drawing.elements[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;
            }
            let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] 
            //id, layer, parent,
            drawing.elements[elemId].id = newId; 
            delete Object.assign(drawing.elements, {[newId]: drawing.elements[elemId]})[elemId]
        }
    })
    drawing.elements['Layers'].forEach((layer, index) => {
        drawing.elements['Layers'][index] = layer.split('-')[0] + '-' + drawing.drawingID + '-' + layer.split('-')[2];
    })
}
const updateDefs = (drawing) => {
    //elements
    let elemIds = Object.keys(drawing.defs);
    elemIds.forEach(elemId => {
        if(drawing.defs[elemId].children) {
            drawing.defs[elemId].children.forEach((childId, index) => {
                drawing.defs[elemId].children[index] = childId.split('-')[0] + '-' + drawing.drawingID + '-' + childId.split('-')[2];
            })
        }
        //fill use filltype
        if(drawing.defs[elemId].fill?.includes('url')) {
            drawing.defs[elemId].fill = drawing.defs[elemId].fill.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].fill.split('-')[2];
        }
        //stroke
        if(drawing.defs[elemId].stroke?.includes('url')) {
            drawing.defs[elemId].stroke = drawing.defs[elemId].stroke.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].stroke.split('-')[2];
        }
        //markerStart, markerMid, markerEnd
        if(drawing.defs[elemId].markerStart?.includes('url')) {
            drawing.defs[elemId].markerStart = drawing.defs[elemId].markerStart.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerStart.split('-')[2];
        }
        if(drawing.defs[elemId].markerMid?.includes('url')) {
            drawing.defs[elemId].markerMid = drawing.defs[elemId].markerMid.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerMid.split('-')[2];
        }
        if(drawing.defs[elemId].markerEnd?.includes('url')) {
            drawing.defs[elemId].markerEnd = drawing.defs[elemId].markerEnd.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].markerEnd.split('-')[2];
        }
        
        //mask
        if(drawing.defs[elemId].mask?.includes('url')) {
            let masks = drawing.defs[elemId].mask.split(' ');
            masks.forEach((mask, index) => {
                if(mask.includes('url')) {
                    masks[index] = mask.split('-')[0] + '-' + drawing.drawingID + '-' + mask.split('-')[2];
                }
            })
            drawing.defs[elemId].mask = masks.join(' ');
        }
        //filter
        if(drawing.defs[elemId].filter?.includes('url')) {
            let filters = drawing.defs[elemId].filter.split(' ');
            filters.forEach((filter, index) => {
                if(filter.includes('url')) {
                    filters[index] = filter.split('-')[0] + '-' + drawing.drawingID + '-' + filter.split('-')[2];
                }
            })
            drawing.defs[elemId].filter = filters.join(' ');
        }
        //layer, parent
        let layer = drawing.defs[elemId].layer?.split('-');
        if(layer && layer.length === 3) {
            drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[2];
        } else if(layer) {
            drawing.defs[elemId].layer = layer[0] + '-' + drawing.drawingID + '-' + layer[1];
        }
        let parent = drawing.defs[elemId].parent?.split('-');
        if(parent && parent.length === 3) {
            drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[2];
        } else if(parent && parent.length === 2) {
            drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + parent[1];
        } else if(parent) {
            drawing.defs[elemId].parent = parent[0] + '-' + drawing.drawingID + '-' + 0;
        }
        if(drawing.defs[elemId].tag === 'textMask') {
            drawing.defs[elemId].shape = drawing.defs[elemId].shape.split('-')[0] + '-' + drawing.drawingID + '-' + drawing.defs[elemId].shape.split('-')[2];
            let texts = drawing.defs[elemId].text;
            texts.forEach((text, index) => {
                texts[index] = text.split('-')[0] + '-' + drawing.drawingID + '-' + text.split('-')[2];
            })
            drawing.defs[elemId].text = texts;
        }
        let newId = elemId.split('-')[0] + '-' + drawing.drawingID + '-' + elemId.split('-')[2] 
        //id, layer, parent,
        drawing.defs[elemId].id = newId; 
        delete Object.assign(drawing.defs, {[newId]: drawing.defs[elemId]})[elemId]
    })
}
const updateHistory = (drawing) => {
    drawing.appHistory.forEach(history => {
        if(history.id) {
            history.id = history.id.split('-')[0] + '-' + drawing.drawingID + '-' + history.id.split('-')[2];
        }
    })
}
export async function POST({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const userCollection = await getDBCollection('users');
    const user = await userCollection.findOne({publicID});
    // const res = await validateSubscription(user, userCollection);
    // if(res.status !== 200) {
    //     return new Response(JSON.stringify(res.body), {status: res.status});
    // }
    const {title, description, category, elements, defs, viewBox, appHistory, permission} = await request.json();
    const drawingsCollection = await getDBCollection('drawings');
    const count = await drawingsCollection.countDocuments({publicID});
    const newDrawing = initializeNewDrawing(publicID, title, description, category, elements, defs, viewBox, appHistory, permission, count);
    
    //update drawingID and ids in elements, defs, appHistory
    updateElements(newDrawing);
    updateDefs(newDrawing);
    updateHistory(newDrawing);
    
    const confirm = await drawingsCollection.insertOne(newDrawing);
    if(!confirm.acknowledged) {
        return error(500, 'Failed')
    }
    return new Response(JSON.stringify({id: newDrawing.drawingID}))
}
export async function PUT({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const userCollection = await getDBCollection('users');
    const user = await userCollection.findOne({publicID});
    // const res = await validateSubscription(user, userCollection);
    // if(res.status !== 200) {
    //     return new Response(JSON.stringify(res.body), {status: res.status});
    // }
    const {title, description, category, elements, defs, viewBox, appHistory, permission, drawingID} = await request.json();
    const drawingsCollection = await getDBCollection('drawings');
    const update = await drawingsCollection.updateOne({drawingID}, {
        $set: {
            title, description, category, elements, defs, viewBox, appHistory, permission
        }
    })
    if(!update.acknowledged) {
        return error(500, 'Failed')
    }
    return new Response('Success', {status: 200})
}
export async function DELETE({url, params, request, locals}) {
    if(!locals.user) {
        return error(401, 'Unauthorized')
    }
    const publicID = locals.user.publicID;
    const {drawingID} = await request.json();
    const drawingsCollection = await getDBCollection('drawings');
    const confirm = await drawingsCollection.deleteOne({publicID, drawingID})
    if(!confirm.acknowledged) {
        return error(504, 'Delete operation failed');
    }
    return new Response('Success');
}