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

    //associations (Built from lesson.js)
  
//     //association to Subject model
//     Subject.belongsToMany(models.User, {
//       through: models.Users_Lessons,
//       foreignKey: "lessonId",
//       otherKey: "userId",
//     });
//   };

    return Subject;
} 
