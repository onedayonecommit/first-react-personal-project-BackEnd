const dot = require("dotenv").config()
const config = require("../config/config");
const Sequelize = require("sequelize");
const User = require("./user")
const Movie = require("./movie");
const Freeboard = require("./freeboard");
const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;
db.User = User
db.Movie = Movie
db.Freeboard = Freeboard

User.init(sequelize)
Movie.init(sequelize)
Freeboard.init(sequelize)
module.exports = db;