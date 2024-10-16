const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Vaga = sequelize.define('Vaga', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Vaga;
