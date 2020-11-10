module.exports = (sequelize, DataTypes) => {
    const Billing = sequelize.define("Billing", {
        //defining fields for Billing model
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cycle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        billing_amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        
    });
    //associations for Billing
//   Billing.associate = (models) => {
//     Billing.hasOne(models.User, {
//       foreignKey: {
//         name: "UserId",
//         allowNull: false,
//       },
//     });
  
// };

    return Billing;
} 
