const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const socketio = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.Server(app);
const io = socketio(server);



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
const connectUsers = {};

io.on('connection', socket =>{
  const { user } = socket.handshake.query;

  connectUsers[user] = socket._id;
})

app.use((req, res, next) => {
  req.io = io;
  req.connectUsers = connectUsers;
  return next()
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});