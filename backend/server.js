const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});

app.get('/', (req, res) => {
  res.send('API rodando...');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
