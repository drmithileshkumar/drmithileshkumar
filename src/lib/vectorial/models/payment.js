//@ts-nocheck
export const initializeNewPayment = (payment_id, order_id, name, publicID, amount, status, type) => {
    let newPayment = {
        payment_id,
        order_id,
        creationTimestamp: Date.now(), //private
        name,
        publicID, //public
        amount,
        status,
        type //Trial, Monthly, Yearly
    }
    return newPayment;
}