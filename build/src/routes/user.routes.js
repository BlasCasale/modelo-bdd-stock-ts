"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewareUser_1 = require("../utils/middlewareUser");
const createUserHandler_1 = require("../handler/createUserHandler");
const userRouter = (0, express_1.Router)();
userRouter.get('/getUser', [middlewareUser_1.validateUserNameQuery, middlewareUser_1.validatePinQuery], (_req, res) => {
    res.send('Funciono');
});
userRouter.post('/createUser', [middlewareUser_1.validateUserNameBody, middlewareUser_1.validatePinBody], createUserHandler_1.createUserHandler);
exports.default = userRouter;
