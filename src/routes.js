const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController')
const LoginController = require('./controllers/LoginController')


routes.get('/status', (req, res) => {
  res.send('status: 200');
})

//register
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

//login
routes.post('/login', LoginController.store)

module.exports = routes;