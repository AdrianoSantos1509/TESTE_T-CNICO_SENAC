const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "O título não pode estar vazio." }
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: "A duração deve ser um número inteiro." },
            min: {
                args: [1],
                msg: "A duração deve ser maior que 0."
            }
        }
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [6, 255],
                msg: "A sinopse deve ter entre 6 e 255 caracteres."
            }
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'movies',
    timestamps: true,
    underscored: true
});

Movie.associate = (models) => {

    Movie.hasMany(models.Review, {
        foreignKey: 'movie_id',
        as: 'reviews'
    });

};

module.exports = Movie;