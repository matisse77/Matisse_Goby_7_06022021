const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_DB,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: process.env.DATABASE_DIALECT,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      socketPath: '/tmp/mysql.sock',
    },
    define: {
      paranoid: true,
    },
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Connection to database ${process.env.DATABASE_DB} has been successfully`
    );
    sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
};

connect({ force: true });

module.exports = sequelize;
