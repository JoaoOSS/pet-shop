const Sequelize = require('sequelize');
const configuration = require("../utils/configuration");
const User = require('./user.model');
const Service = require('./service.model');
const Animal = require('./animal.model');

const config = configuration()
const sequelize = new Sequelize(config.database)

const database = {
    Sequelize,
    sequelize,
    User: User(sequelize, Sequelize),
    Service: Service(sequelize, Sequelize),
    Animal: Animal(sequelize, Sequelize)
}

module.exports = database