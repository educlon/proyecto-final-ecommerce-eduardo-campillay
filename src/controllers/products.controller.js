import * as Model from '../models/products.model.js'
import {validationResult} from 'express-validator';

export const getAllProducts = async (req, res) => {
  const products = await Model.getAllProducts()
  res.json(products)
};

export const getProductById = async (req, res) => {
    const { id } = req.params

    const product = await Model.getProductById(id)

    if (!product) {
        res.status(404).json({ error: 'Error al encontrar el producto.' })
    }

    res.json(product)
};

export const postProduct = async (req, res) => {
  const result = validationResult(req); 

  if (!result.isEmpty()){
    return res.status(422).json({errores: result.array()})
  };

  const { nombre, precio, descripcion, stock } = req.body;
    
  const newProduct = await Model.postProduct({nombre, precio, descripcion, stock});
   
  res.status(201).json(newProduct);
};

export const putProduct = async (req, res) => {
  const result = validationResult(req)

  if(!result.isEmpty()){
      return res.status(422).json({errores: result.array()})
  }

  const { nombre, precio, descripcion, stock } = req.body
  const productId = req.params.id

  const product = await Model.putProduct(productId, {nombre, precio, descripcion, stock})

  if(!product){
    res.status(404).json({error: 'Error al modificar el producto'})
  }
    
  res.json(product)
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id

  const deletedProduct = await Model.deleteProduct(productId)

  if (!deletedProduct) {
    return res.status(404).json({ error: 'El producto no fue encontrado' })
  }

  res.status(200).json(deletedProduct)
};