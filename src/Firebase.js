// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA69Aj1xY8oRBrjYsM1uYjkQpqHGN2i5N0",
  authDomain: "netflix-react-yt-3ab10.firebaseapp.com",
  projectId: "netflix-react-yt-3ab10",
  storageBucket: "netflix-react-yt-3ab10.appspot.com",
  messagingSenderId: "180004350426",
  appId: "1:180004350426:web:29d42e24592b79379bb8e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app)





//   <div>
//          <Link to='/login'>
//             <button className=' text-white pre-4'>Sign In</button>
//             </Link>
//             <Link to='/signup'>
//             <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
//             </Link>
//         </div>
 