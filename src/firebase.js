// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkF8u334-OcXI8UEGaqrnmbsSAwAAbInI',
  authDomain: 'driverbooking-4af72.firebaseapp.com',
  projectId: 'driverbooking-4af72',
  storageBucket: 'driverbooking-4af72.appspot.com',
  messagingSenderId: '269730159807',
  appId: '1:269730159807:web:e7f2de8e09e42075217a0a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
