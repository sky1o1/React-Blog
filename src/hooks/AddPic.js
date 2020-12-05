// import { useState, useEffect } from 'react'; 
// import {storage} from 'src/firebase'

// const useStoragePic = (file) => {
//     const [url,setUrl] = useState(null);

//     useEffect(() => {
//         const uploadTask = storage.ref(`images/${file.name}`).put(file);
//         uploadTask.on(
//             "state changed",
//             (snapshot) => {
//                 console.log(snapshot)
//             },
//             (error) => {
//                 console.log(error);
//             },
//             () => {
//                 storage
//                 .ref("images")
//                 .child(file.name)
//                 .getDownloadURL()
//                 .then(url => {
//                     setUrl(url);
//                 })
//             }
//         )
//     },[])
//     return {url}
// }

// export default useStoragePic;