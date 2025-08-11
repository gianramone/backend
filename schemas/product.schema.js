// Ruta: schemas/product.schema.js
import { z } from 'zod';

export const productSchema = z.object({
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    precio: z.number().positive('El precio debe ser positivo'),
    categoria: z.string().min(1, 'La categoría es obligatoria'),
    ruta_img: z.string().url('Debe ser una URL válida').optional(),
    descripcion: z.string().min(1, 'La descripción es obligatoria')
    
});

