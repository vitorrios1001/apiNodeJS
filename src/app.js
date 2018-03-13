'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//Carrega as Rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/',index);
app.use('/product',product);

module.exports = app;

