import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAyrDxvJU48ETweFaMIsHxOrPY_K-P9A6Q',
  authDomain: 'yagi5108.firebaseapp.com',
  projectId: 'yagi5108',
  storageBucket: 'yagi5108.appspot.com',
  messagingSenderId: '916610444207',
  appId: '1:916610444207:web:2d8ba10c93e12b2540dd5a',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
