// Incluir el fichero con la definición de la BD
var db = require('../db');
var ObjectId = require('mongodb').ObjectId;
const { check, validationResult } = require('express-validator');
//   Conectar con la BD
db.connect('mongodb://localhost:27017', function(err) {
    if (err) { throw ('Fallo en la conexión con la BD'); }
});

module.exports.personas_list = function(req, res, next) {
    // Si el objeto es nulo es que no se ha establecido la conexión  
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }
    // Recuperar datos de la base de datos en formato array
    db.get().db('practicaFinal').collection('personas').find().toArray(function(err, result) {
        // Si se produjo un error, enviar el error a la siguiente función 
        if (err) {
            next(new Error('Fallo en el listado de personas'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente
            res.send(result);
        }
    });
};

module.exports.personas_create = function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }); }
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }

    const persona = {};
    persona.nombre = req.body._nombre;
    persona.apellidos = req.body._apellidos;
    persona.edad = req.body._edad;
    persona.dni = req.body._dni;
    persona.birthday = req.body._birthday;
    persona.sexo = req.body._sexo;
    persona.color = req.body._color;
    persona.notas = req.body._notas

    // Insertar un documento
    db.get().db('practicaFinal').collection('personas').insertOne(persona, function(err, result) {
        // Si se produjo un error, enviar el error a la siguiente función 
        if (err) {
            next(new Error('Fallo en la inserción de la persona'));
            return;
        } else {
            // Si todo fue bien, devolver el resultado al cliente 
            res.send(result);
        }
    });
};

// Update users
module.exports.personas_update_one = function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }); }
    if (db.get() === null) { next(new Error('La conexión no está establecida')); return; }
    const filter = { _id: ObjectId(req.params.id) };
    const update = {
        $set: {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            edad: req.body.edad,
            dni: req.body.dni,
            birthday: req.body.birthday,
            sexo: req.body.sexo,
            color: req.body.color,
            notas: req.body.notas
        }
    }; // Insertar un documento
    db.get().db('practicaFinal').collection('personas').updateOne(filter, update, function(err, result) { // Si se produjo un error, enviar el error a la siguiente función 
        if (err) { next(new Error('Fallo en la actualización con la BD')); return; } else { // Si todo fue bien, devolver el resultado al cliente 
            res.send(result);
        }
    });
};

// Delete users
module.exports.personas_delete_one = function(req, res, next) {
    if (db.get() === null) { next(new Error('La conexión no está establecida')); return; }
    const filter = { _id: ObjectId(req.params.id) };
    db.get().db('practicaFinal').collection('personas').deleteOne(filter, function(err, result) { // Si se produjo un error, enviar el error a la siguiente función 
        if (err) { next(new Error('Fallo en con la BD')); return; } else { // Si   todo fue bien, devolver el resultado al cliente 
            res.send(result);
        }
    });
};

// Update users
module.exports.personas_getById = function(req, res, next) {
    if (db.get() === null) {
        next(new Error('La conexión no está establecida'));
        return;
    }

    const filter = { _id: ObjectId(req.params.id) };
    db.get().db('practicaFinal').collection('personas').find(filter).toArray(function(err, result) {
        if (err) {
            next(new Error('Fallo en el listado de personas'));
            return;
        } else {
            res.send(result);
        }
    });
};