const express = require('express');
const app = express();
//  get port number from environment settings
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoute = require('./routes/product.route');
const customerRoute = require('./routes/customer.route');
const categoriesRoute = require('./routes/categories.route');

// cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// path url
// app.[method]();

//  Match Get localhost:4000
app.get("/", (req,res) => {
    res.send("สวัสดี");
});

// ใช้ productRoute เมื่อ requst ขึ้นต้นด้วย /products
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/categories", categoriesRoute);


app.listen(port, () => {
    console.log("Server start at port " + port);
});