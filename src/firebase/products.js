import { storeFire, storage } from '../services/config';

const uploadImage = (image) => {
    return storage.ref(`products/${image.name}`).put(image).then(
        response => response.ref.getDownloadURL()
    )
}

// ADD RPODUCTS TO THE FIRESTORE
export const addProducts = async (name, type, description, image, code, sellingPrice, discountedPrice, stock) => {
    try {
        const url = await uploadImage(image);
        const collectionRef = storeFire.collection('Products')
        const docId = collectionRef.doc().id;
        const productsDocuments = {
            id: docId,
            name,
            type,
            description,
            sellingPrice,
            discountedPrice,
            code,
            stock,
            imageUrl: url,
            imageName: image.name,
            createdAt: new Date(),
        }
        // add products to firestore
        await collectionRef.doc(docId).set(productsDocuments)
        return productsDocuments
    }
    catch (error) {
        console.log(error);
        return Promise.reject(error)
    }
}

// GET PRODUCTS FROM FIRESTORE
export const getProducts = async () => {
    try {
        const docProducts = await storeFire.collection('Products').get();
        return docProducts.docs.map(doc => doc.data())
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}