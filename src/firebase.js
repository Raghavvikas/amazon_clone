import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBv6zEONDVJSxOlkxmyUVto6eWksYVXwSU",
    authDomain: "eshop-c2e0a.firebaseapp.com",
    projectId: "eshop-c2e0a",
    storageBucket: "eshop-c2e0a.appspot.com",
    messagingSenderId: "941031253944",
    appId: "1:941031253944:web:0bc5a43bc9fe9af86e514d",
    measurementId: "G-5BDLQRB305"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

console.log({db, auth});

export { db, auth, firebaseApp };
// export default firebase;

