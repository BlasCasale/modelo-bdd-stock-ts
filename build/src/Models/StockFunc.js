"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockFunc = void 0;
const sequelize_1 = require("sequelize");
const StockFunc = (db) => {
    db.define('Stock', {
        id: {
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            type: sequelize_1.DataTypes.UUID
        },
        product: {
            type: sequelize_1.DataTypes.UUID,
            references: {
                model: 'Products',
                key: 'id'
            },
            allowNull: false
        },
        measure: {
            type: sequelize_1.DataTypes.UUID,
            references: {
                model: 'StockTypes',
                key: 'id'
            },
            allowNull: false
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'Stocks'
    });
};
exports.StockFunc = StockFunc;
