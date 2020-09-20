module.exports = function (app) {
	
  app.get('/user/:userId', (req, res) => {   
	/* 	#swagger.tags = ['get-user']
			#swagger.description = 'Endpoint to find a user.' */

		/*	#swagger.parameters['obj'] = {
				in: 'body',
				description: 'User information.',
				required: false,
				type: 'object'
        } */
      return res.status(404).send(false)

  })  

  app.post('/user/register', (req, res) => {
    
    res.setHeader('Content-Type', 'application/xml')
    	/* 	#swagger.tags = ['create-user']
			#swagger.description = 'Endpoint to add a user.' */

		/*	#swagger.parameters['obj'] = {
				in: 'body',
				description: 'User information.',
				required: true,
				type: 'object',
				schema: { $ref: "#/definitions/AddUser" }
        } */
    const data = users.addUser(req.query.obj)
    return res.status(201).send(data)    
    
  })
  
  app.post('/login', (req, res) => {
    /* 	#swagger.tags = ['login']
      #swagger.description = 'Endpoint to login.' */
    
    /*	#swagger.parameters['obj'] = {
				in: 'body',
				description: 'User information.',
				required: true,
				type: 'object',
				schema: { $ref: "#/definitions/login" }
        } */
    return res.status(404).send(false)   

  })
}