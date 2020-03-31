const router = require('express').Router();
const productApi = require('../controllers/productApi');
/*
        --API to add products to the database (URL [POST]: /products/create)
        --API to list products (URL [GET] : /products)
        --API to delete products (URL [DELETE] : /products/:id)
        --API to update quantity of a product (can be incremented or decremented)
           (URL [POST] : /products/:id/update_quantity/?number=10)

*/

router.post('/products/create',productApi.createProduct);//API to add products to the database

router.get('/products',productApi.getProducts);//API to list products

router.delete('/products/:id',productApi.deleteProduct);//API to delete products


//API to update quantity of a product
router.post('/products/:id/update_quantity',productApi.updateProduct);
module.exports = router;