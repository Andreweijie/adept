/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbljobtype', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		jobtype: {
			type: DataTypes.STRING(500),
			allowNull: false
		}
	}, {
		tableName: 'tbljobtype'
	});
};
