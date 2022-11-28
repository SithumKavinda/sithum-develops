import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCejJMMrukQuP6_iDk9OeBwqtWuDvEumQw',
  authDomain: 'sithum-develops.firebaseapp.com',
  databaseURL: 'https://sithum-develops-default-rtdb.firebaseio.com',
  projectId: 'sithum-develops',
  storageBucket: 'sithum-develops.appspot.com',
  messagingSenderId: '807118794072',
  appId: '1:807118794072:web:1947196adf38889c60492d',
  measurementId: 'G-7N47TBB81L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
