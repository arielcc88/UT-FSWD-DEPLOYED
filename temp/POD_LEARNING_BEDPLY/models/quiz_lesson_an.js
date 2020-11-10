module.exports = (sequelize, DataTypes) => {
    const Quiz_Lesson_An = sequelize.define("Quiz_Lesson_An", {
        //defining fields for Quiz_Lesson_An model
        answer_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_correct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
                
    });

    //association to Lesson model
    Quiz_Lesson_An.associate = (models) => {

        Quiz_Lesson_An.belongsTo(models.Lesson, {
            foreignKey: {
            name: "lessonId"
            }
        });

        Quiz_Lesson_An.belongsTo(models.Quiz_Lesson_Qn, {
            foreignKey: {
            name: "quiz_lessonId"
            }
        });
    }

    return Quiz_Lesson_An;
} 
