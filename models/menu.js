const Sequelize = require('sequelize');
 
module.exports = class Menu extends Sequelize.Model {
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
			 store: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Menu',
      tableName: 'menus',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    //db.Tag.belongsTo(db.TagGrp, { foreignKey: 'grp_id', targetKey: 'id' });
  }
};