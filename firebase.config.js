import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCraWSDmt4rCOsXg7v9lEyqK8UFV4HQBU8",
  authDomain: "nextauth-js.firebaseapp.com",
  projectId: "nextauth-js",
  storageBucket: "nextauth-js.appspot.com",
  messagingSenderId: "760486572758",
  appId: "1:760486572758:web:4c52e943623ce1b5924f77",
};

// const app = initializeApp(firebaseConfig);
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
