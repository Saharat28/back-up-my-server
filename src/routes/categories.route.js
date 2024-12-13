const express = require('express');
const app = express.Router();
const controller = require('../controllers/categories.controller');


app.get("/", controller.get);
app.get("/:id",controller.getById);


module.exports = app;
