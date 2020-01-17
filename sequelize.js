const Sequelize = require("sequelize");
const JobModel = require("./sql-models/Job");
const CustomerModel = require("./sql-models/Customer");
const StatusModel = require("./sql-models/Status");
const TypeModel = require("./sql-models/Type");
const {
  DATABASE_NAME,
  USERNAME,
  PASSWORD,
  HOST,
  DIALECT
} = require("./constants");
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const Job = JobModel(sequelize, Sequelize);
const Customer = CustomerModel(sequelize, Sequelize);
const Status = StatusModel(sequelize, Sequelize);
const Type = TypeModel(sequelize, Sequelize);
// Author has Many to book
//Author.hasMany(Book);

module.exports = {
  Job,
  Customer,
  Status,
  Type
};
