import express from 'express';
const app = express();
import rutasUsuarios from './rutas/rutaUsuarios.js';
import rutasProductos from './rutas/rutasProductos.js';

// Middleware para leer JSON en las solicitudes
app.use(express.json());

// Rutas de usuarios
app.use('/usuarios', rutasUsuarios);

// Rutas de productos (con Firestore)
app.use('/productos', rutasProductos);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor en funcionamiento en puerto 3000');
});
