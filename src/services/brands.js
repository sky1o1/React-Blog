import { storeFire, storage } from './config';

const uploadImage = (image) => {
    return storage.ref(`brands/${image.name}`).put(image).then(
        response => response.ref.getDownloadURL()
    )
}

export const addBrands = async (name, type, description, image) => {
    try {
        const url = await uploadImage(image)
        const brandDocument = {
            name,
            type,
            description,
            createdAt: new Date(),
            imageName: image.name,
            imageUrl: url,
        }
        // add brands to firestore
        const collectionRef = storeFire.collection('Brands');
        const docId = collectionRef.doc().id
        await collectionRef.doc(docId).set(brandDocument);
        return brandDocument
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
} 