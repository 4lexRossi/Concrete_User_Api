const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const verifyToken = require('./config/verifyToken');

routes.get('/status', (req, res) => {
  res.send('status: 200');
})

//register
routes.get('/user/:userId', verifyToken, UserController.getUserById)
routes.post('/user/register', UserController.createUser)


//login
routes.post('/login', LoginController.store)

module.exports = routes;