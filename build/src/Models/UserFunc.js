"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFunc = void 0;
const sequelize_1 = require("sequelize");
const UserFunc = (db) => {
    db.define('User', {
        id: {
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            type: sequelize_1.DataTypes.UUID
        },
        userName: {
            type: sequelize_1.DataTypes.STRING(70),
            unique: true,
            allowNull: false
        },
        pin: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });
};
exports.UserFunc = UserFunc;
