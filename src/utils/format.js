// Get doc data and merge doc.id
export const getDocData = doc => {
    return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
};

// Get array of doc data from collection
export const getCollectionData = collection => {
    return collection.docs.map(getDocData);
};