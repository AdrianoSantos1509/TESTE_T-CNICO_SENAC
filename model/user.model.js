const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "O nome não pode estar vazio." }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "Este e-mail já está cadastrado." },
        validate: {
            isEmail: { msg: "Insira um e-mail válido." },
            notEmpty: { msg: "O e-mail é obrigatório." }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Garante que a senha tenha entre 6 e 100 caracteres
            len: {
                args: [6, 50],
                msg: "A senha deve ter entre 6 e 50 caracteres."
            }
        }
    }
}, {
    tableName: 'users',
    timestamps: true,   // Cria created_at e updated_at  
});

// Espaço para associações (caso precise ligar com posts ou outras tabelas)
User.associate = (models) => {

    User.hasMany(models.Review, {
        foreignKey: 'user_id',
        as: 'reviews'
    });

};

module.exports = User;