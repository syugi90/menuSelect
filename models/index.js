'use strict';
const TagGrp = require('./tagGrp');
const Tag = require('./tag');
const Menu = require('./menu');

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.TagGrp = TagGrp;
db.Tag = Tag;
db.Menu = Menu;

TagGrp.init(sequelize);
Tag.init(sequelize);
Menu.init(sequelize);

TagGrp.associate(db);
Tag.associate(db);
Menu.associate(db);

module.exports = db;
