'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');
const uploadImage = require('../services/uploadImage-service');

exports.getAll = (req,res,next) => {
    repository
    .getAll()
    .then( data => {
        res.status(200).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getBySlug = (req,res,next) => {
    repository
    .getBySlug(req.params.slug)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getById = (req,res,next) => {
    repository
    .getById(req.params.id)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getTag = (req,res,next) => {
    repository
    .getByTag(req.params.tag)
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.post = (req,res,next) => {
    //Construir function abstrata de validação dos dados recebidos

    
    repository
    .create({
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description ,
        price: req.body.price,
        active: req.body.active,
        tags: req.body.tags
    })
        .then(x => {
            res.status(201).send({ message: 'Produdo cadastrado com sucesso!'});               
        }).catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o produto!',
                data: e
            });        
        });    
};

exports.put = (req,res,next) => {
    repository
    .update(req.params.id, req.body)
    .then( x => {
        res.status(201).send({
            message : 'Produto atualizado com sucesso!'
        });
    }).catch( e => {
        res.status(400).send({
            message: 'Falha ao atualizar produto',
            data: e
        });
    });
};

exports.delete = (req,res,next) => {
    repository
    .delete(req.body.id)
    .then( x => {
        res.status(201).send({
            message : 'Produto excluido com sucesso!'
        });
    }).catch( e => {
        res.status(400).send({
            message: 'Falha ao excluir produto',
            data: e
        });
    });
};