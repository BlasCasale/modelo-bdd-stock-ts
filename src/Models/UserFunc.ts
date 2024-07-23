import { Sequelize, DataTypes } from 'sequelize'

export const UserFunc = (db: Sequelize): void => {
  db.define('User', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    userName: {
      type: DataTypes.STRING(70),
      unique: true,
      allowNull: false
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}
