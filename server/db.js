const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', 'root', {
    dialect: 'mariadb',
    host: "10.147.17.239",
    port: 3306
})

module.exports = sequelize;