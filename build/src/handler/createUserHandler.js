"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const createUser_1 = __importDefault(require("../controller/createUser"));
const const_1 = require("../utils/const");
const createUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, pin } = req.body;
        const user = yield (0, createUser_1.default)({ userName, pin });
        res.send({ message: const_1.successfulRes, user });
    }
    catch (error) {
        const CE = error;
        res.status(CE.statusCode).send({ error: CE.message });
    }
});
exports.createUserHandler = createUserHandler;
