const User = require('../../../src/models/User');

describe('Routes: Users', () => {
  const defaultId = '56cb91bdc3464f14678934ca'
  const defaultUser = {
    nome: 'Alex',
    email: 'alex@mail.com',
    senha: String,
    telefones: {
      numero: Number,
      ddd: Number,
    },
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z'
  }

  const expectedUser = {
    id: defaultId,
    nome: defaultUser.nome,
    email: defaultUser.email,
    senha: defaultUser.senha,
    telefones: {
      numero: defaultUser.numero,
      ddd: defaultUser.ddd,
    createdAt: defaultUser.createdAt,
    updatedAt: defaultUser.updatedAt
  }

  beforeEach(async () => {
    const user = new User(defaultUser)
    user._id = defaultId

    await User.deleteMany({})
    await user.save()
  })

  afterEach(() => User.deleteMany({}))
  
  describe('GET /user/:userId', () => {
    it('should return a user', async () => {
      const response = await request.get('/user')

      expect(response.body).to.eql([expectedUser])
    })
    context('when an id is specified', () => {
      it('should return 200 with one user', async () => {
        const response = await request.get(`/user/${defaultId}`)

        expect(response.statusCode).to.eql(200)
        expect(response.body).to.eql([expectedUser])
      })
    })
  })
  describe('POST /user/register', () => {
    context('when posting an user', () => {
      it('should return a new user with status code 201', async () => {
        const customId = '56cb91bdc3464f14678934ba'
        const newUser = {
          ...expectedUser,
          _id: customId,
          nome: 'alex',
          email: 'alex@mail.com',
          senha: 'senha'          
        }
        const expectedSavedUser = {
          id: customId,
          nome: defaultUser.nome,
          email: defaultUser.email,
          senha: defaultUser.senha,
          telefones: {
            numero: defaultUser.numero,
            ddd: defaultUser.ddd,
          createdAt: defaultUser.createdAt,
          updatedAt: defaultUser.updatedAt
        }

        const response = await request.post('/user/register/').send(newUser)

        expect(response.statusCode).to.eql(201)
        expect(response.body).to.eql(expectedSavedUser)
      })
    })
  })


  