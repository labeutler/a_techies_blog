const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        // timestamps: false,
    },
);
module.exports = Comment;