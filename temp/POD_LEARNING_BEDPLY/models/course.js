module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    //defining fields for Course model
    course_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  //associations
  Course.associate = (models) => {
    //Course associates with many users and lessons
    Course.belongsToMany(models.User, {
      through: models.Users_Courses,
      foreignKey: "courseId",
      otherKey: "userId",
    });
    //Course associates with many Subjects for bridge table
    Course.belongsToMany(models.Subject, {
      through: "course_subject",
      foreignKey: "courseId",
      otherKey: "subjectId",
    });
    //course hasMany lessons.
    Course.hasMany(models.Lesson, {
      onDelete: "cascade",
    });
  };

  return Course;
};
