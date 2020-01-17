/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbljobstatus', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		jstatus: {
			type: DataTypes.STRING(400),
			allowNull: true
		}
	}, {
		tableName: 'tbljobstatus'
	});
};
