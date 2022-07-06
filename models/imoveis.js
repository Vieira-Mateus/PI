var sequelize = require("sequelize")
var banco = require("../configs/banco-config")

var imoveis = banco.define("imoveis",{
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nomePropretario: {
        type: sequelize.STRING(40),
        allowNull: false,
        
    },
    idCorretor: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: sequelize.STRING(30),
        allowNull: false,
        
    },
    situação: {
        type: sequelize.STRING(50),
        allowNull: false,
        
    },
    
},{
    freezeTableName: true,
    timestamps: false
})

imoveis.sync() //cria a tabela

module.exports = imoveis
 