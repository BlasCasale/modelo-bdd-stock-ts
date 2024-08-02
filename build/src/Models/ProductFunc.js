"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFunc = void 0;
const sequelize_1 = require("sequelize");
const ProductFunc = (db) => {
    db.define('Product', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        code: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false
    });
};
exports.ProductFunc = ProductFunc;
