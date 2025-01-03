// @ts-nocheck

export const initializeNewDrawing = (publicID, title, description, category, elements, defs, viewBox, appHistory, permission, count) => {
    let newDrawing = {
        publicID,
        creationTimestamp: Date.now(),
        title, description, category, elements, defs, viewBox, appHistory, permission, //public, private
        price: 0,
        drawingID: publicID + count + 'R' + Math.floor(100*Math.random())
    }
    return newDrawing;
}