// Import File System module
const fs = require("fs");
// Import Path module
const path = require("path");
// Import Sequelize module
const Sequelize = require("sequelize");
// Set basename variable
const basename = path.basename(__filename);
// Import config variables
const {
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  PG_DIALECT,
} = require("../../config/config");
// Init db object
const db = {};
// Create Sequelize instance
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: PG_DIALECT,
});
// Read all files in models directory
fs.readdirSync(__dirname)
  // Filter out non-JS files
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  // For each file, import model and add to db object
  .forEach((file) => {
    // Import model
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // Add model to db object
    db[model.name] = model;
  });
// For each model in db object, if model has associate method, call it
Object.keys(db).forEach((modelName) => {
  // If model has associate method, call it
  if (db[modelName].associate) {
    // Call associate method
    db[modelName].associate(db);
  }
});
// Add Sequelize instance to db object
db.sequelize = sequelize;
// Add Sequelize constructor to db object
db.Sequelize = Sequelize;
// Export db object
module.exports = db;
