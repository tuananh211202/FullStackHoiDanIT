const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tuananh', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect successfully.');
  } catch (error) {
    console.log('Cant connect to DB:', error);  
  }
}

module.exports = connectDB;
