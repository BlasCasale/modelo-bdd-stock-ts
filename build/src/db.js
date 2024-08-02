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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Stock = exports.StockType = exports.User = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const ProductFunc_1 = require("./Models/ProductFunc");
const StockFunc_1 = require("./Models/StockFunc");
const StockTypeFunc_1 = require("./Models/StockTypeFunc");
const UserFunc_1 = require("./Models/UserFunc");
dotenv_1.default.config();
const DB_NAME = process.env.DB_NAME;
const DB_PASS = process.env.DB_PASS;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const db = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_PORT}/${DB_NAME}`, { logging: false });
const connectToDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.authenticate();
    }
    catch (error) {
        console.error('Error al conectar la base de datos \n', error);
    }
});
(0, ProductFunc_1.ProductFunc)(db);
(0, StockTypeFunc_1.StockTypeFunc)(db);
(0, StockFunc_1.StockFunc)(db);
(0, UserFunc_1.UserFunc)(db);
void connectToDataBase();
_a = db.models, exports.User = _a.User, exports.StockType = _a.StockType, exports.Stock = _a.Stock, exports.Product = _a.Product;
exports.default = db;
