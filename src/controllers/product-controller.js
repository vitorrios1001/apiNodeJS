'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getAll = (req,res,next) => {
    Product.find({
        active : true
    }, 'title price slug description')
    .then( data => {
        res.status(201).send(data); 
    }).catch( e => {
        res.status(500).send({
            message: 'Falha ao buscar',
            data : e
        });
    });
};

exports.getBySlug = (req,res,next) => {
    Product.findOne({
        slug : req.params.slug,
        active : true
    }, 'title price slug description')
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
    Product.findById(req.params.id)
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
    Product.find({
        tags : req.params.tag,
        active: true       
    }, 'title description price slug tags')
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
    var product = new Product(req.body);
    product
        .save()
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
    Product.findByIdAndUpdate(req.params.id, {
        $set: {
            title : req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    }).then( x => {
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
    Product.findOneAndRemove(req.body.id)
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