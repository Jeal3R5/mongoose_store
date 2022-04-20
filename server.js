require("dotenv").config();

//Dependencies
const express = require("express");
const methodOverride = require("method-override");
const productsController = require("./controllers/products");
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware
app.use(express.urlencoded({ extended: true })); //body parser
app.use(methodOverride("_method"));
app.use("/products", productsController);

//Mongoose Config
const Product = require("./models/product.js");    //requires Product schema
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(DATABASE_URL);

//Check for DB connection and errors
db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));








app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
