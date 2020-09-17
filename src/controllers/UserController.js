const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async store(req, res){
    try {
      
      const {nome, email, senha, telefones: {numero, ddd}} = req.body;

      const existentUser = await User.findOne({email});

      if(!existentUser){
        const hashedPassword = await bcrypt.hash(senha, 10);
        const user = await User.create({
          nome,
          email,          
          senha: hashedPassword,
          telefones: {
            numero,
            ddd
          }        
        });
        return res.json(user)
      }
      return res.status(400).json({
        mensagem: 'Email já existente'
      })


    }catch (error) {
      throw Error(`mensagem: ${error}`)
    }
  }
}