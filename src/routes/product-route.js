'use strict'

const express = require('express');
const router  = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

router.get('/', controller.getAll);
router.get('/slug/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/tag/:tag', controller.getTag);
router.post('/', authService.isAdmin, controller.post);
router.put('/:id', authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);//id passado no body

module.exports = router;