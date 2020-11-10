module.exports = (sequelize, DataTypes) => {
    const Video_Lesson = sequelize.define("Video_Lesson", {
        //defining fields for Video_Lesson model
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    });

    return Video_Lesson;
} 
