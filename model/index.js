'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');
const Movie = require('./movie.model');
const Review = require('./review.model');

const db = {
  sequelize,
  Sequelize,
  User,
  Movie,
  Review
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;