/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "tbljob",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      jobName: {
        type: DataTypes.STRING(300),
        allowNull: true
      },
      custID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      manufacturer: {
        type: DataTypes.STRING(400),
        allowNull: true
      },
      equipID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      quotationComment: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      faultDesc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      entryDateTime: {
        type: DataTypes.DATE,
        allowNull: true
      },
      jobClass: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      jobType: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      freightTerm: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      orderNo: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      adviceNoticeNo: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      modelNo: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      serialNo: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      itemDesc: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      jobStatus: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      closedDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      partID: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      partQty: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      quote: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      jobFinishedBy: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      goaheaddate: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      quoteBy: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      repBy: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      finalOutBy: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      engReport: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      previousjobid: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      isjobwarranty: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      jobLocation: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      quoteProfit: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "0"
      },
      quoteCost: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "0"
      },
      quoteHour: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "0"
      },
      salesperson: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      jobid: {
        type: DataTypes.STRING(7),
        allowNull: true
      }
    },
    {
      tableName: "tbljob",
      timestamps: false
    }
  );
};
