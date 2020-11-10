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

    return Quiz_Lesson_An;
} 
