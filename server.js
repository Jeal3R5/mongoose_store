require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const products = require("./models/product");
// const productsController = require("./controllers/products");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use("/products", productsController);

// mongoose.connect(process.env.DATABASE_URL, {
//   usedNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", (err) => console.log(err.message + "is mongo not running?"));
// db.on("connected", () => console.log("mongoose connected"));
// db.on("disconnected", () => console.log("mongo disconnected"));



//blank landing page
app.get('/', (req, res) => {
    res.send("You are home");
});











app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
