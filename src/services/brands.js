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

export const getBrands = async () => {
    try {
        const docBrands = await storeFire.collection('Brands').orderBy('createdAt').get();
        return docBrands.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}

export const updateBrands = async (id, name, type, description, image) => {
    try {
        const url = await uploadImage(image)
        const brandDocument = {
            name,
            type,
            description,
            updatedAt: new Date(),
            imageName: image.name,
            imageUrl: url,
        }
        // update brands to firestore
        console.log('id for update', id)
        const collectionRef = storeFire.collection('Brands');
        await collectionRef.doc(id).update(brandDocument)
        alert('Succesfully updated')
        return brandDocument
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}

export const deleteBrands = async (id) => {
    try {
        const collectionRef = storeFire.collection('Brands');
        await collectionRef.doc(id).delete().then(() => {
            alert('Succesfully deleted')
        });
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}