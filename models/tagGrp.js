const Sequelize = require('sequelize');

module.exports = class TagGrp extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      checkYn: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'TagGrp',
      tableName: 'tagGrps',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    //db.User.hasMany(db.Tag, { foreignKey: 'grp_id', sourceKey: 'id' });
  }
};