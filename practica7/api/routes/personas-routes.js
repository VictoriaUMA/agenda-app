var express = require('express');
var router = express.Router();
var persona_controller = require('../controllers/personas-controller')

const { check } = require('express-validator');


const valid_user = [
    check('_nombre', 'Nombre no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
    check('_apellidos', 'Apellidos no validos').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isString().matches(/^[a-zA-Z áéíóúÁÉÍÓÚñÑ]+$/i),
    check('_edad', 'Edad no validad').isInt({ min: 0, max: 125 }).withMessage('Valor mínimo: 0 Valor máximo: 125'),
    check('_dni', 'DNI no valido').isLength({ min: 9, max: 9 }).withMessage('Debe contener 9 caracteres').isAlphanumeric().withMessage('Debe ser una cadena alfanumerica'),
    check('_birthday', 'Cumpleaños no valido').isISO8601().withMessage('Debe tener formato ISO08601 (yyyy-mm-dd)'),
    check('_color', 'Color no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
    check('_sexo', 'Sexo no valido [Hombre, Mujer, Otro, No especificado]').isIn(['Hombre', 'Mujer', 'Otro', 'No especificado']).isString()
];
const valid_userUpdate = [
    check('nombre', 'Nombre no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
    check('apellidos', 'Apellidos no validos').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isString().matches(/^[a-zA-Z áéíóúÁÉÍÓÚñÑ]+$/i),
    check('edad', 'Edad no validad').isInt({ min: 0, max: 125 }).withMessage('Valor mínimo: 0 Valor máximo: 125'),
    check('dni', 'DNI no valido').isLength({ min: 9, max: 9 }).withMessage('Debe contener 9 caracteres').isAlphanumeric().withMessage('Debe ser una cadena alfanumerica'),
    check('birthday', 'Cumpleaños no valido').isISO8601().withMessage('Debe tener formato ISO08601 (yyyy-mm-dd)'),
    check('color', 'Color no valido').isLength({ min: 4 }).withMessage('Longitud minima superior a 3').isAlpha(['es-ES']).withMessage('No puede incluir números'),
    check('sexo', 'Sexo no valido [Hombre, Mujer, Otro, No especificado]').isIn(['Hombre', 'Mujer', 'Otro', 'No especificado']).isString()
];

/* CREATE */
router.post('/', valid_user, persona_controller.personas_create)
    /* READ */
router.get('/:id', persona_controller.personas_getById);
router.get('/', persona_controller.personas_list);
/* UPDATE */
router.put('/:id', valid_userUpdate, persona_controller.personas_update_one);
/* DELETE */
router.delete('/:id', persona_controller.personas_delete_one);

module.exports = router;