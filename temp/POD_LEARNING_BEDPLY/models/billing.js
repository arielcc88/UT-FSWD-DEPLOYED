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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        billing_amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        
    });

    return Billing;
} 
