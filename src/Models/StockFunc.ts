import { Sequelize, DataTypes } from 'sequelize'

export const StockFunc = (db: Sequelize): void => {
  db.define('Stock', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    product: {
      type: DataTypes.UUID,
      references: {
        model: 'Products',
        key: 'id'
      },
      allowNull: false
    },
    measure: {
      type: DataTypes.UUID,
      references: {
        model: 'StockTypes',
        key: 'id'
      },
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'Stocks'
  })
}
