'use strict'

const express = require('express');
const router  = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.getAll);
router.get('/slug/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/tag/:tag', controller.getTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);//id passado no body

module.exports = router;