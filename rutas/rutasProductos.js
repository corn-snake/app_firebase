import express from "express";
var ruta = express.Router();
import { mostrarProductos, nuevoProducto, borrarProducto, buscarProductoPorId } from "../bd/productosBD.js";

// Mostrar todos los productos
ruta.get("/", async (req, res) => {
    const productos = await mostrarProductos();
    res.json(productos);
});

// Buscar producto por ID
ruta.get("/:id", async (req, res) => {
    var productoValido = await buscarProductoPorId(req.params.id);
    if (!productoValido) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(productoValido);
});

// Borrar producto por ID
ruta.delete("/borrar/:id", async (req, res) => {
    var productoBorrado = await borrarProducto(req.params.id);
    if (productoBorrado.mensaje === 'Producto no encontrado') {
        return res.status(404).json(productoBorrado);
    }
    res.json(productoBorrado);
});

// Agregar un nuevo producto
ruta.post("/nuevo", async (req, res) => {
    var productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

const rutaProducto = ruta;

export default rutaProducto;