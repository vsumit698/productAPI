const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    quantity : {
        type : Number,
        required : true,
    }
});

const productModel = mongoose.model('productModel',productSchema);
module.exports = productModel;