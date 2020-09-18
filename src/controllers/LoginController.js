const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
  async store(req, res){
    try{
      const {email, senha}= req.body;

      if(!email || !senha){
        return res.status(200).json({ mensagem: "Campo obrigatório faltando"})
      }

      const user = await User.findOne({email});
      if(!user){
        return res.status(200).json({mensagem: "Usuário e/ou senha inválidos"})
      }

      if(user && await bcrypt.compare(senha, user.senha)){
        const userResponse = {
          _id: user._id,
          email: user.email
        }
        return res.json(userResponse)
      }else{
        return res.status(401).json({mensagem:"Usuário e/ou senha inválidos"})
      }

    }catch(error){
      throw Error(`Erro durante a autenticação do usuário ${error}`)
    }
  }
}