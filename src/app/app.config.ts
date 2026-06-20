import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};

const firebaseConfig = {
  apiKey: "AIzaSyCgaUDKJe2ZKtA4J6Lt8_PmXrP_SQRL86A",
  authDomain: "prodigimind-e295d.firebaseapp.com",
  projectId: "prodigimind-e295d",
  storageBucket: "prodigimind-e295d.firebasestorage.app",
  messagingSenderId: "64614956583",
  appId: "1:64614956583:web:00b0518cb4d3fab3f09802",
  measurementId: "G-6EHF3EF7R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
