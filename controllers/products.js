// const express = require('express');
// const product = require('.models/products');
// const productSeed = require('./models/productSeed');
// const productRouter = express.Router();

const { append } = require("express/lib/response");

// productRouter.get('/seed', (req,res) => {
//     product.deleteMany({}, (err, deletedProducts) => {
//         product.create(productSeed, (err, data) => {
//             res.redirect('/products');
//         });
//     });
// });



// //Index Route
// productRouter.get('/', (req, res) => {
//     product.find({}, (err, allProducts) => {
//         res.render('index.ejs', {products: allProducts});
//     });
// });




// //New Route
// productRouter.get('/new', (req, res) => {
//     res.render('new.ejs');
// });




// //Delete Route
// productRouter.delete('/:id', (req, res) => {
//     product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
//         res.redirect('/products');
//     });
// });




// // Update Route
// productRouter.put('/:id', (req, res) => {
//     console.log(req.body);
//     product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
//         if (err) console.log(err);
//         res.redirect(`/products/${req.params.id}`);
//     });
// });




// //Create Route
// productRouter.post('/', (req, res) =>{
//     product.create(req.body, (err, createdProduct) => {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         } else {
//             res.redirect('/products');
//         }
//     });
// })




// //Edit Route
// productRouter.get('/:id/edit', (req, res) => {
//     product.findById(req.params.id, (err, product) => {
//         res.render('edit.ejs', {product})
//     });
// });




// //Show Route
// productRouter.get('/:id', (req, res) => {
//     product.findById(req.params.id, (err, product) => {
//         res.render('show.ejs', {product});
//     });
// });




// module.exports = productRouter;