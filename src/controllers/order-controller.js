'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = (req,res,next) => {
    repository
    .get()
    .then( data => {
        res.status(200).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.post = async(req,res,next) => {
    
    try{
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Ocorreu um erro ao salvar o pedido'
        });
    }
};