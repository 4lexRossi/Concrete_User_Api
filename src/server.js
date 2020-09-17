const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

if(process.env.NODE !== 'production'){
  require('dotenv').config();
}



try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('MongoDB Conectado')
} catch(error){
  console.log(error)
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})