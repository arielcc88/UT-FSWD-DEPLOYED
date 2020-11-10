module.exports = (sequelize, DataTypes) => {
  const Dependent = sequelize.define("Dependent", {
    //this notification flag tells us if the guardian wants to get an email or notification of all comms for under age learner
    notify_everything: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    notification_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //associations
  Dependent.associate = (models) => {

  //association to user model for dependent
  Dependent.belongsTo(models.User, {
    foreignKey: {
    name: "learnerId"
    }
  });

  Dependent.belongsTo(models.User, {
    foreignKey: {
    name: "guardianId"
    }
  });
}

  return Dependent;
};