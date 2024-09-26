import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    addDoc,
    collection,
    connectFirestoreEmulator,
    deleteDoc,
    doc,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    query,
    QuerySnapshot,
    setDoc,
    where,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

import {config} from "./fb_config.js";

const app = initializeApp(config, "tienda");

const bd = getFirestore(app);

const usuarios = collection(bd, "usrs");
const productos = collection(bd, "prods");
export { bd, usuarios, productos };