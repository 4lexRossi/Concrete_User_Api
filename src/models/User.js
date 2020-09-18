const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefones: {
    numero: Number,
    ddd: Number
  }  
})

module.exports = mongoose.model('Users', UserSchema)