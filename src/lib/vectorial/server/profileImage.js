//@ts-nocheck
import { getImagesCollection } from '$lib/vectorial/server/mongo'


export async function getProfileImage(publicID) {
    const imagesCollection = await getImagesCollection()
    let image = await imagesCollection.findOne({publicID});
    return image.images.profile;
}