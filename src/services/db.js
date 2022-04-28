const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysqlnode', 'root', 'pass', {host: 'localhost', dialect: 'mysql'});

const init = async () => {
    try{
        await sequelize.authenticate();
        console.log('DB Connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    init,
    sequelize
}