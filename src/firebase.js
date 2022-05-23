import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtzkuVflPzLoVxFNMMZA5VmodP4GQ7JrA',
  authDomain: 'kucc-library.firebaseapp.com',
  projectId: 'kucc-library',
  storageBucket: 'kucc-library.appspot.com',
  messagingSenderId: '178981228436',
  appId: '1:178981228436:web:38f7bee8bdd083ad46c981',
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const storeService = getFirestore(app);
