import { bd, productos } from '../conexion.js';  // Cambia firebase por conexiones
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

// Mostrar todos los productos
async function mostrarProductos() {
    const productosSnapshot = await getDocs(productos);
    const productosList = productosSnapshot.docs.map(doc=>doc.data());
    return productosList;
}

// Buscar producto por ID
async function buscarProductoPorId(id) {
    const qr = query(productos, where("id", "==", id));
    const productoDoc = await getDocs(qr).then(qs => {
        const data = qs.docs.map((doc) => doc.data());
        return data[0];
    });
    if (!productoDoc) return false;
    return productoDoc;
}

// Agregar un nuevo producto
async function nuevoProducto(producto) {
    const { id, nombre, precio } = producto;
    const cuerpo = {
        nombre,
        precio
    }
    if(!cuerpo) return false;
    const nuevoDoc = await setDoc(doc(bd,"prods", id),cuerpo);
    return nuevoDoc;
}

// Borrar un producto por ID
async function borrarProducto(id) {
    try {
        await deleteDoc(bd, "producto", id);
        return true;
    } catch (e) {
        return false;
    }
}

export { mostrarProductos, buscarProductoPorId, nuevoProducto, borrarProducto };