require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const methodOveride = require('method-override');
const products = require('./models/products');
const app = express();
const PORT = process.env.PORT || 3000;







































app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
