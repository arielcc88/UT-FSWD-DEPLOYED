module.exports = (sequelize, DataTypes) => {
    const Reading_Lesson = sequelize.define("Reading_Lesson", {
        //defining fields for Video_Lesson model
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resource: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    });

    return Reading_Lesson;
} 
