const express = require("express");
const Product = require("../models/product");
const productSeed = require("../models/productSeed");
const productRouter = express.Router();

const { append } = require("express/lib/response");

productRouter.get("/seed", (req, res) => {
  Product.deleteMany({}, (err, deletedProducts) => {
    Product.create(productSeed, (err, data) => {
      res.redirect("/products");
    });
  });
});

//Index Route
productRouter.get("/", (req, res) => {
  Product.find({}, (err, allProducts) => {
    res.render("index.ejs", { products: allProducts });
  });
});

//New Route
productRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

//Delete Route
productRouter.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    res.send({ deletedProduct: deletedProduct });
    res.redirect("/products");
  });
});

// Update Route
productRouter.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    if (err) console.log(err);
    res.send(updatedProduct);
    res.redirect(`/products/${req.params.id}`);
  });
});

//Create Route
productRouter.post("/", (req, res) => {
  Product.create(req.body, (err, createdProduct) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.redirect("/products");
    }
  });
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

module.exports = productRouter;
