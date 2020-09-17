const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefones: {
    numero: Number,
    ddd: Number
  } /*
  firstName: String,
  lastName: String,
  password: String,
  email:String */
})

module.exports = mongoose.model('Users', UserSchema)