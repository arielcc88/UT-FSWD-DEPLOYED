module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define("Subject", {
        //defining fields for Subject model
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lesson_total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
    });
    
    //associations
    Subject.associate = (models) => {

    //Course associates with many Subjects for bridge table
    Subject.belongsToMany(models.Course, {
        through: "course_subject",
        foreignKey: "subjectId",
        otherKey: "courseId",
      });
    //Lesson associates with many Subjects and vice versa for bridge table
    Subject.belongsToMany(models.Lesson, {
        through: "subject_lesson",
        foreignKey: "subjectId",
        otherKey: "lessonId",
      });
    };
    return Subject;
} 
