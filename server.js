const express = require('express'); // 1. Importar o Express
const sequelize = require('./config/database');
require('dotenv').config();
const userRoutes = require('./routes/user.routes');
const movieRoutes = require('./routes/movie.routes');
const reviewRoutes = require('./routes/review.routes');
const app = express(); // 2. Inicializar o app
const cors = require("cors")
// Middleware para ler JSON (essencial para seus Controllers)
app.use(express.json()); 

// Importe suas rotas aqui futuramente
app.use(cors())
app.use('/user', userRoutes);
app.use('/movie', movieRoutes);
app.use('/review', reviewRoutes);



async function startServer() {
    try {
        // Testa a conexão
        await sequelize.authenticate();
        console.log('Conexão com o MySQL estabelecida com sucesso!');

        // Sincroniza os Models com o Banco
        // { alter: true } ajusta as tabelas sem deletar os dados existentes
        await sequelize.sync({ alter: false }); 
        console.log('Modelos sincronizados com o banco.');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });

    } catch (error) {
        console.error('Erro ao conectar no banco ou iniciar servidor:', error);
    }
}

startServer();