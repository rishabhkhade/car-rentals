const Sequelize= require("sequelize")
const sequelize =new Sequelize(process.env.DB,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
const db={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;
