const sinon = require('sinon');

const User = require('../../../src/models/User');


describe('Controller: Users', () => {
  const defaultUser = [{
    id: '56cb91bdc3464f14678934ca',
    nome: 'Default',
    email: 'user@mail.com',
    senha: String,
    telefones: {
      numero: Number,
      ddd: Number,
    },
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z'
  }]

  const defaultRequest = {
    params: {}
  }  

  describe('getUserById()', () => {
    it('should call send with one user', async () => {
      const fakeId = 'a-fake-id'
      const request = {
        params: {
          id: fakeId
        }
      }
      const response = {
        send: sinon.spy()
      }

      User.find = sinon.stub()
      User.find.withArgs({ _id: fakeId }).resolves(defaultUser)

      const usersController = new UsersController(User)

      await usersController.getUserById(request, response)

      sinon.assert.calledWith(response.send, defaultUser)
    })
  })
})