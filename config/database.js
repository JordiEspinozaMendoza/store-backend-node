// Declare Sequelize instance
const Sequelize = require("sequelize");

// Import config variables
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  PG_DIALECT,
} = require("./config");
// Create Sequelize instance
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: PG_DIALECT,
});
// Export Sequelize instance as module exports
module.exports = sequelize;
