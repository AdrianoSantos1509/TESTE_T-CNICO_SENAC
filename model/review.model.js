const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "A nota deve ser um número inteiro." },
            min: { args: [1], msg: "A nota mínima é 1." },
            max: { args: [5], msg: "A nota máxima é 5." }
        }
    },

    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "O comentário não pode estar vazio." }
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'reviews',
    timestamps: true,
    
});

Review.associate = (models) => {

    Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
    });

    Review.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie'
    });

};

module.exports = Review;