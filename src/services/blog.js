import { storeFire, storage } from './config'

export const createBlog = async (title, description, image) => {
    try {
        console.log('entered')
        //1. Upload Image, return download
        const url = await uploadImage(image)
        const blogDocument = {
            title,
            description,
            createdAt: new Date(),
            imageName: image.name,
            imageUrl: url
        }
        //2. create blog post
        const collectionRef = storeFire.collection('Blogs');
        const docId = collectionRef.doc().id
        await collectionRef.doc(docId).set(blogDocument)
        return null
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}



const uploadImage = (image) => {
    return storage.ref(`blogs/${image.name}`).put(image).then(response => response.ref.getDownloadURL())

}

export const getBlog = async () => {
    try {
        const docList = await storeFire.collection('Blogs').orderBy('createdAt').get();
        console.log('docs list', docList)
        return docList.docs.map(doc => doc.data())
    }
    catch (error) {
        return Promise.reject(error);
    }

}