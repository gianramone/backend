// Ruta: models/product.model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    ruta_img: { type: String },
    descripcion: { type: String, required: true}
}, {
    timestamps: true
});


export const Product = mongoose.model('Product', productSchema);
