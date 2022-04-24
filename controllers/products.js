const express = require("express");
const Product = require("../models/product");
const productSeed = require("../models/productSeed");
const productRouter = express.Router();
// const btnBuy = require("../public/app.js")

//Index Route
productRouter.get("/", async (req, res) => {
  //get products
  const products = await Product.find({}).catch((err) => res.send(err))
  // Product.find({}, (err, allProducts) => {
    //res.send(allProducts)
     res.render("index.ejs", { products })
  });



//Seed Route
productRouter.get("/seed", async (req, res) => {
  await Product.remove({}).catch((err) => res.send(err)) 
    const products = await Product.create(productSeed, (err, data) => {
      res.redirect("/products");
    });
  });



//New Route
productRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});



//Delete Route
productRouter.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    //res.send({ deletedProduct: deletedProduct });
    res.redirect("/products");
  });
});




// Update Route
productRouter.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    if (err) console.log(err);
    //res.send(updatedProduct);
    res.redirect(`/products/${req.params.id}`);
  });
});




//Create Route
productRouter.post("/", async (req, res) => {
  //create the product
  await Product.create(req.body).catch((err) => res.send(err))
    // redirect back to the main page
      res.redirect("/products");
  });




//Edit Route
productRouter.get("/:id/edit", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("edit.ejs", { product });
  });
});




//Show Route
productRouter.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("show.ejs", { product });
  });
});

// //Buy Button

// btnBuy.addEventListener('click', () => {
//     <%= product.qty %> -= 1;
// })




module.exports = productRouter;
