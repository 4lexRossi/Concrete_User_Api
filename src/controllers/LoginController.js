const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
          nome: user.nome          
        }
        return jwt.sign({ user: userResponse }, 'secret', (err, token) =>{
          return res.json({
          user:token,
          user_id:userResponse._id,
          date:Date.now()
          })
        })        
      }else{
        return res.status(401).json({mensagem:"Usuário e/ou senha inválidos"})
      }

    }catch(error){
      throw Error(`Erro durante a autenticação do usuário ${error}`)
    }
  }
}