const Sequelize=require('sequelize')

const sequelize=new Sequelize(`expense-tracker`,`aiden`,`y.7089407712`,{
    dialect:`mysql`,
    host:`localhost`
    
})

module.exports=sequelize;