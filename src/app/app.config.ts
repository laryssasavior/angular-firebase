import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkLSfy2HAVhTKFCONwSmUisX5NR2O_82U",
  authDomain: "auth-advocacia.firebaseapp.com",
  databaseURL: "https://auth-advocacia-default-rtdb.firebaseio.com",
  projectId: "auth-advocacia",
  storageBucket: "auth-advocacia.firebasestorage.app",
  messagingSenderId: "334890534790",
  appId: "1:334890534790:web:f0f7e8b56b32618b8c8e07"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      ]),
  ],
};
