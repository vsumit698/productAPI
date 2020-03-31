const productModel = require('../models/productModel');

module.exports.createProduct = async function(req,res){
    try {
        //console.log(req.body);
        var product = await productModel.findOne({name : req.body.name});
        if(!product){
            await productModel.create(req.body);
            return res.status(200).json({
                data : {
                    product : {
                        name : req.body.name,
                        quantity : req.body.quantity
                    }
                }
            });
        }
        res.status(200).json({
            message : "Product is already Created :("
        });
    } catch (error) {
        return res.status(200).json({
            message : "error occurred at Server :(" + error
        });
    }
};

module.exports.getProducts = async function(req,res){
    try {
        var products = await productModel.find({});
        return res.status(200).json({
            data : {
                product : products
            }
        });
    } catch (error) {
        return res.status(200).json({
            message : "error occurred at Server :(" + error
        });
    }
}

module.exports.deleteProduct = async function(req,res){
    try {
        var product = await productModel.findById(req.params.id);
        if(product){
            await productModel.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                data: {
                    message: "product deleted"
                }
            });
        }
        res.status(200).json({
            data: {
                message: "product does not Exist"
            }
        });
    } catch (error) {
        return res.status(200).json({
            message : "error occurred at Server :(" + error
        });
    }
}

module.exports.updateProduct = async function(req,res){
    try {
        var product = await productModel.findById(req.params.id);
        if(product){
            product.quantity += Number(req.body.number);
            product.save(); 
            return res.status(200).json({
                data: {
                    product : product,
                    message: "updated successfully"
                }
            });
        }
        res.status(200).json({
            data: {
                message: "product does not Exist"
            }
        });
    } catch (error) {
        return res.status(200).json({
            message : "error occurred at Server :(" + error
        });
    }
}