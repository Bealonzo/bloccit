'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      body: {
        type: DataTypes.STRING,
        allowNull: false
      },

 //#2
      topicId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {});
  Post.associate = function(models) {

    Post.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE"
     });
  };
  return Post;
};
