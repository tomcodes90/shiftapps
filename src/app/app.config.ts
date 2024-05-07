import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getPerformance, providePerformance } from '@angular/fire/performance';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"taskmanager-5652c","appId":"1:208253143766:web:5da8c3df369c0cb0705777","databaseURL":"https://taskmanager-5652c-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"taskmanager-5652c.appspot.com","apiKey":"AIzaSyDlkGt9BKmR6NbxrX1Hx4GcGIbX7dxP8Q4","authDomain":"taskmanager-5652c.firebaseapp.com","messagingSenderId":"208253143766","measurementId":"G-FGNERHGYLD"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(providePerformance(() => getPerformance()))]
};
