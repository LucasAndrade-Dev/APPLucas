const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 1. Configuração de CORS (Essencial para falar com a Vercel)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PATCH, DELETE');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// 2. Conexão com o MongoDB
const mongoURL = process.env.MONGODB_URI || "mongodb+srv://Lucas249038:Lucas231104@cluster0.tbcfcg7.mongodb.net/tarefasDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (error) => console.log("Erro no MongoDB:", error));
db.once('connected', () => console.log('Database Connected'));

// 3. Rotas (Apenas uma vez)
const routes = require('./routes/routes');
app.use('/api', routes);

// 4. Inicialização do Servidor (Apenas uma vez)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

