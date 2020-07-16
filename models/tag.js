const Sequelize = require('sequelize');

module.exports = class TagGrp extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      selectYn: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Tag',
      tableName: 'tags',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    //db.Tag.belongsTo(db.TagGrp, { foreignKey: 'grp_id', targetKey: 'id' });
  }
};