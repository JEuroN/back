const {Router} = require('express');
const productosController = require('../controllers/ejemplo.controller')
const router = Router();

router.get('/', productosController.getProducto);
router.get('/:id', productosController.getProductoById);
router.post('/', productosController.crearProducto); 
router.put('/', productosController.putEjemplo);
router.delete('/:id', productosController.deleteEjemplo);

module.exports = router;