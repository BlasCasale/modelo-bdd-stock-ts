"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockTypeFunc = void 0;
const sequelize_1 = require("sequelize");
const StockTypeFunc = (db) => {
    db.define('StockType', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        measure: {
            type: sequelize_1.DataTypes.STRING(40),
            unique: true,
            allowNull: false
        }
    }, {
        timestamps: false
    });
};
exports.StockTypeFunc = StockTypeFunc;
