"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdBody = exports.validatePinBody = exports.validatePinQuery = exports.validateUserNameBody = exports.validateUserNameQuery = void 0;
const const_1 = require("./const");
const validateUserNameQuery = (req, res, next) => {
    const { userName } = req.query;
    if (!userName)
        throw new Error('Por favor envie el nombre de usuario.');
    if (typeof userName !== 'string')
        throw new Error('Se debe enviar unicamente una cadena de textos.');
    if (!const_1.regName.test(userName))
        throw new Error('El nombre solo debe contener letras (mayúsculas y minúsculas) y sin espacios.');
    next();
};
exports.validateUserNameQuery = validateUserNameQuery;
const validateUserNameBody = (req, res, next) => {
    const { userName } = req.body;
    if (!userName)
        throw new Error('Por favor envie el nombre del usuario.');
    if (typeof userName !== 'string')
        throw new Error('Se debe enviar unicamente una cadena de texto.');
    if (!const_1.regName.test(userName))
        throw new Error('El nombre solo debe contener letras (mayúsculas y minúsculas) y sin espacios.');
    next();
};
exports.validateUserNameBody = validateUserNameBody;
const validatePinQuery = (req, res, next) => {
    const { pin } = req.query;
    if (!pin)
        throw new Error('Por favor envie el PIN para iniciar sesion.');
    const num = Number(pin);
    if (num < 0)
        throw new Error('El PIN unicamente debe ser mayor a 0.');
    next();
};
exports.validatePinQuery = validatePinQuery;
const validatePinBody = (req, res, next) => {
    const { pin } = req.body;
    if (!pin)
        throw new Error('Por favor envie el PIN para continuar.');
    const num = Number(pin);
    if (num < 0)
        throw new Error('El PIN unicamente debe ser mayor a 0.');
    next();
};
exports.validatePinBody = validatePinBody;
const validateIdBody = (req, res, next) => {
    const { id } = req.body;
    if (!id)
        throw new Error('Por favor envie el ID para continuar.');
    if (typeof id !== 'string')
        throw new Error('El ID debe ser de tipo cadena de texto.');
    if (!const_1.regId.test(id))
        throw new Error('El ID enviado no respeta el formato UUID.');
    next();
};
exports.validateIdBody = validateIdBody;
