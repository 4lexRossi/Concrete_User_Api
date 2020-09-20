# Concrete User Api

![](https://img.shields.io/github/stars/4lexRossi/Concrete_User_Api.svg) ![](https://img.shields.io/github/forks/4lexRossi/Concrete_User_Api.svg) ![](https://img.shields.io/github/issues/4lexRossi/Concrete_User_Api.svg)

## Deploy no Heroku

[clique aqui para testar pelo Swagger](https://create-user-concrete.herokuapp.com/doc/)

### end points
Criar usuario [https://create-user-concrete.herokuapp.com/user/register](https://create-user-concrete.herokuapp.com/user/register)

buscar usuario [https://create-user-concrete.herokuapp.com/user/:userId](https://create-user-concrete.herokuapp.com/user/5f67abfd644deb00170ac3c4)

login [https://create-user-concrete.herokuapp.com/login](https://create-user-concrete.herokuapp.com/login)

## rodando localmente
`git clone https://github.com/4lexRossi/Concrete_User_Api.git`

## Instalar dependências
```
npm install
```
## Conectando MongoDB Atlas
Crie uma conta [MongoDB-Atlas](https://www.mongodb.com/) clique em DB Access e crie um usuario, depois em NetWork access, para autorizar outras IPs conectarem com seu DB, altere o arquivo .env com suas configurações

`npm run start` ou `npm run dev`

e ele vai subir na porta [local:8000](http://localhost:8000/status)

## Executando os testes
Para executar os testes unitários, use o comando:
```
npm run test:unit
```

Para executar os testes de integração, use o comando:
```
npm run test:integration
```

## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do Mongoose](https://www.npmjs.com/package/mongoose)

[Documentação do swagger](https://swagger.io/)

[Documentação do bcrypt](https://www.npmjs.com/package/bcrypt)

[Documentação do jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[Documentação do Sinon.js](https://sinonjs.org) - módulo para uso de *stubs*, *mock* e *spy*

[Documentação do Mocha](https://mochajs.org) - módulo de execução de suites de teste

[Documentação do Chai](https://www.chaijs.com) - módulo para fazer asserções

[Documentação do SuperTest](https://github.com/visionmedia/supertest) - emula e abstrai requisições HTTP



```html
Não consegui realizar todos os pré-requisitos,
mas documentei a API com o swagger

```

<p align="center">
  <a href="https://www.linkedin.com/in/4lex/">
    <img src="https://avatars3.githubusercontent.com/u/62000504?s=400&u=9077ec8b32016a8accbb59dfc8e6d217b7b1b468&v=4" title="Alex Rossi" width="100" height="100">
  </a>