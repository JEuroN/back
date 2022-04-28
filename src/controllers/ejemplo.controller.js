productosController = {};
const Product = require('../models/product/productModel');

productosController.getProductoById = async (req, res) => {
    try{

        const {id} = req.params

        const product = await Product.findAll(
            {
                where: {productId: id}
            }
        )
        
        if(product) return res.status(200).json({msg: product, status: 'ok', statusCode: 200})

        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
    }catch(err){
        console.log(err);
        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
    }
}

productosController.getProducto = async (req, res) => {
    try{

        const product = await Product.findAll()
        
        if(product) return res.status(200).json({msg: product, status: 'ok', statusCode: 200})

        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})

    }catch(err){
            console.log(err);
            return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
        }
}   

productosController.crearProducto = async (req, res) => {
    try{
        const {productName, productPrice} = req.body
        console.log(req.body)
        const product = await Product.create({ productName, productPrice})

        if(product) return res.status(200).json({msg: product, status: 'ok', statusCode: 200})
        console.log(product)
        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
        
    }catch(err){
        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
    }
}  

productosController.putEjemplo = async (req, res) => {
    try{

        const { productName, id} = req.body

        const product = await Product.update({ productName},{ where: {productId: id}});

        if(product) return res.status(200).json({msg: product, status: 'ok', statusCode: 200})

        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
              
    }catch(err){
        console.log(err);
        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
    }
}   

productosController.deleteEjemplo = async (req, res) => {
    try{

        const {id} = req.params

        const product = await Product.destroy({where: {productId: id}})
       
        if(product) return res.status(200).json({msg: product, status: 'ok', statusCode: 200})

        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
        
    }catch(err){
        return res.status(500).json({msg: 'Error!', status: 'error', statusCode: 500})
    }
}   

module.exports = productosController;