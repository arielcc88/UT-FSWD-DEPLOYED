module.exports = (sequelize, DataTypes) => {
    const Quiz_Lesson_Qn = sequelize.define("Quiz_Lesson_Qn", {
        //defining fields for Quiz_Lesson_Qn model
        question_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //association to Lesson model
    Quiz_Lesson_Qn.associate = (models) => {

        Quiz_Lesson_Qn.belongsTo(models.Lesson, {
            foreignKey: {
            name: "lessonId"
            }
          });
    }

    return Quiz_Lesson_Qn;
} 
