const { Sequelize, Model, DataTypes } = require('sequelize');
// const { Post } = require('.');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'post'
        // timestamps: false,
    },
);
module.exports = Post;