// Ruta: controllers/product.controller.js
import { Product } from '../models/product.model.js';
import { productSchema } from '../schemas/product.schema.js';

export const getAllProducts = async (req, res) => {
    const productos = await Product.find();
    res.json(productos);
};

export const createProduct = async (req, res) => {
    try {
        const data = productSchema.parse(req.body);
        const nuevo = await Product.create(data);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

export const getProductById = async (req, res) => {
    const producto = await Product.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'No encontrado' });
    res.json(producto);
};

export const updateProduct = async (req, res) => {
    try {
        const data = productSchema.parse(req.body);
        const actualizado = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

export const patchProduct = async (req, res) => {
    try {
        const actualizado = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
};
