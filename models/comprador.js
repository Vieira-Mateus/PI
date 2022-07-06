var sequelize = require("sequelize")
var banco = require("../configs/banco-config")

var comprador = banco.define("comprador",{
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize.STRING(30),
        allowNull: false,
        
    },
    login: {
        type: sequelize.STRING(30),
        allowNull: false,
        
    },
    email: {
        type: sequelize.STRING(50),
        allowNull: false,
        
    },
    senha: {
        type: sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: sequelize.STRING,
        allowNull: false,
    },
},{
    freezeTableName: true,
    timestamps: false
})

comprador.sync() //cria a tabela

module.exports = comprador
 