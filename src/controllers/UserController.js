const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async createUser(req, res){
    try {     
      
      const {userId, nome, email, senha, telefones: {numero, ddd} } = req.body;     

      const existentUser = await User.findOne({email});

      if(!existentUser){
        const hashedPassword = await bcrypt.hash(senha, 10);
        const userResponse = await User.create({
          userId,
          nome,
          email,          
          senha: hashedPassword,
          telefones: {
            numero,
            ddd
          }                         
        });
        return  jwt.sign({ user: userResponse }, 'secret', (err, token) =>{
          return res.json({
            user: token,
            user_id: userResponse._id
					})
				})
				
			}else{
				return res.status(400).json({
					message:
						'Email já existente!',
				})
			}


    }catch (err) {
      throw Error(`mensagem: ${error}`)
    }
  },
  
	async getUserById(req, res) {
		const { userId } = req.params;

		try {
			const user = await User.findById(userId);
			return res.json(user)
		} catch (error) {
			return res.status(400).json({
				message:
					'ID de usuario não existe, deseja se registrar ao invés de logar?',
			})
		}	
  }
  

  /*async updateUser(req, res){
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).send({ mensagem: 'ID de usuário incorreta.' })
    }

    try {
        const updatedUser = await User.findOneAndUpdate(
          {
            nome,
            email,
            telefones:{
              numero,
              ddd
            }
         });       

        if (updatedUser) {
            return res.status(200).send({ mensagem: 'Cadastro atualizado com sucesso!' })
        }


        res.status(400).send({ mensagem: 'Não foi possivel atualizar o cadastro' })

        
    } catch (error) {
        res.send(error)
    }
  }*/
}