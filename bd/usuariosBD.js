import { bd, usuarios } from '../conexion.js';  // Cambia firebase por conexiones
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

// Mostrar todos los usuarios
async function mostrarusuarios() {
    const usuariosSnapshot = await getDocs(usuarios);
    const usuariosList = usuariosSnapshot.docs.map(doc => doc.data());
    return usuariosList;
}

// Buscar usuario por ID
async function buscarUsuarioPorId(id) {
    const qr = query(usuarios, where("id", "==", id));
    const usuarioDoc = await getDocs(qr).then(qs => {
        const data = qs.docs.map((doc) => doc.data());
        return data[0];
    });
    if (!usuarioDoc) return false;
    return usuarioDoc;
}

// Agregar un nuevo usuario
async function nuevoUsuario(usuario) {
    const { id, nombre, tel } = usuario;
    const cuerpo = {
        nombre,
        tel
    }
    if (!cuerpo) return false;
    const nuevoDoc = await setDoc(doc(bd, "usrs", id), cuerpo);
    return nuevoDoc;
}

// Borrar un usuario por ID
async function borrarUsuario(id) {
    try {
        await deleteDoc(bd, "usuario", id);
        return true;
    } catch (e) {
        return false;
    }
}

export { mostrarusuarios, buscarUsuarioPorId, nuevoUsuario, borrarUsuario };