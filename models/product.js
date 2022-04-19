const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: false},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    qty: {type: Number, required: true}
    })

const product = mongoose.model('product', productSchema);
module.export = product;