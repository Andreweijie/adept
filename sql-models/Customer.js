/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tblcustomer', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		custName: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		company: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		jobtitle: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		custAddress: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		custPostCode: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custCountry: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custTel: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custFax: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custArea: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custLanguage: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		quoteRequired: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		engineerReportRequired: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		orderNoRequired: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		collectionWaiting: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		custPayment: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		custDeliveryMode: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		currentJob: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		invoiceJob: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'tblcustomer'
	});
};
