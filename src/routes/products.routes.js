import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';
import { body } from 'express-validator';
import { auth } from '../middlewares/auth.middleware.js';
const router = Router()

const rules = [
    body('nombre').escape().notEmpty().withMessage('Debe ingresar un nombre de producto').bail().isLength({min: 3}).withMessage('El nombre debe tener 3 o más caracteres'),
    body('precio').escape().notEmpty().withMessage('Debe ingresar el precio del producto').bail().isNumeric().withMessage('El precio debe ser un número').bail().isFloat({min: 0.00001}).withMessage('El precio debe ser positivo o mayor a 0'),
    body('descripcion').escape().notEmpty().withMessage('Ingrese una descripcion del producto').bail().isLength({min: 10}).withMessage('La descripcion debe tener al menos 10 caracteres'),
    body('stock').escape().notEmpty().withMessage('Ingrese el stock del producto').bail().isNumeric().withMessage('El stock debe ser un número').bail().isFloat({min: 0.00001}).withMessage('El stock debe ser un número mayor que 0')
]

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', rules, auth, postProduct);

router.put('/products/:id', rules, auth, putProduct);

router.delete('/products/:id', auth, deleteProduct);

export default router;