const {sequelize} = require('../../services/db');
const {DataTypes} = require('sequelize');

const Product = sequelize.define('product',
    {
        productId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice:{
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    },
    {sequelize}
)

module.exports = Product;