// var express = require('express');
// var router = express.Router();

// var users_controller = require('../controllers/personas-controller');

// const { check } = require('express-validator');

// /* Validation rules */
// const valid_user = [
//     check('nombre', 'Nombre no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
//     check('apellidos', 'Apellidos no validos').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isString().matches(/^[a-zA-Z áéíóúÁÉÍÓÚñÑ]+$/i),
//     check('edad', 'Edad no validad').isInt({ min: 0, max: 125 }).withMessage('Valor mínimo: 0 Valor máximo: 125'),
//     check('dni', 'DNI no valido').isLength({ min: 9, max: 9 }).withMessage('Debe contener 9 caracteres').isAlphanumeric().withMessage('Debe ser una cadena alfanumerica'),
//     check('birthday', 'Cumpleaños no valido').isISO8601().withMessage('Debe tener formato ISO08601 (yyyy-mm-dd)'),
//     check('colorFavorito', 'Color no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
//     check('sexo', 'Sexo no valido [Hombre, Mujer, Otro, No especificado]').isIn(['Hombre', 'Mujer', 'Otro', 'No especificado']).isString()
// ];

// /* POST create user. */
// router.post('/', valid_user, users_controller.users_create);
// /* GET users listing. */
// router.get('/', valid_user, users_controller.users_list);
// /* PUT update user. */
// router.put('/:id', valid_user, users_controller.users_update_one);
// /* DELTE delete user. */
// router.delete('/:id', valid_user, users_controller.users_delete_one);
// /* GET user by id. */
// router.get('/:id', valid_user, users_controller.get_user);

// module.exports = router;