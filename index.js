const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const vagasRoutes = require('./routes/vagas');

const app = express();
app.use(bodyParser.json());

app.use(vagasRoutes);

const PORT = 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
