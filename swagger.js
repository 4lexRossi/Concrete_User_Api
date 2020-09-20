const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
      version: "1.0.0",
      title: "ApiRestful-NodeJS",
      description: "Documentation automatically generated by the <b>swagger.autogen</b> module."
  },
  host: "https://create-user-concrete.herokuapp.com",
  basePath: "/",
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
        "name": "create-user",
        "description": "Endpoints"
    }
  ],
    definitions: {
      user: {
          nome: "Alex Rossi",
          email: "alex@email.com",
          senha: "senha",
          telefones:
           {
              numero: 123456789,
              ddd: 19
          }
        }
      },
      AddUser: {
        $nome: "Alex Rossi",
        $email: "alex@email.com",
        $senha: "senha",
        $telefones:
           {
              $numero: 123456789,
              $ddd: 19
          }
    },
    tags: [
      {
          "name": "login",
          "description": "Endpoints"
      }
    ],
      definitions: {
        user: {
            email: "alex@email.com",
            senha: "senha"
          }
        },
        login: {
          $email: "alex@email.com",
          $senha: "senha"         
      }    
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server.js')
})