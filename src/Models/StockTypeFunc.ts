import { Sequelize, DataTypes } from 'sequelize'

export const StockTypeFunc = (db: Sequelize): void => {
  db.define('StockType', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    measure: {
      type: DataTypes.STRING(40),
      unique: true,
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
