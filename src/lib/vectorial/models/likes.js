//@ts-nocheck
export const initializeNewLike = (articleID, likes) => {
    let newLike = {
        articleID,
        likes, 
        creationTimeStamp: Date.now()
    }
    return newLike;
}