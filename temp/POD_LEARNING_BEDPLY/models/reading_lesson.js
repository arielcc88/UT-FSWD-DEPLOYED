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

    //association to Lesson model
    Reading_Lesson.associate = (models) => {

        Reading_Lesson.belongsTo(models.Lesson, {
            foreignKey: {
            name: "lessonId"
            }
          });
    }

    return Reading_Lesson;
} 
