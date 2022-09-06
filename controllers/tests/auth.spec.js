const server = require('../../server')
const db = require('../../data/db-config')
const request = require('supertest')

describe('auth router', () => {
  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    return db.seed.run()
  })

  it('db environment set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  // describe('GET /auth', () {
  //   it('responds with json,', (done) {
  //     request(server)
  //       .get('/auth')
  //       .auth('username', 'password')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200, done)
  //   })
  // })

  describe('POST /auth', () => {
    it('adds new user if successful and user email does not exist in the database', async () => {
      const newUser = {
        email: 'a@a.com',
        username: 'aaaaaa',
      }
      const response = await request(server).post('/auth').send(newUser)
      expect(response.type).toBe('application/json')
      expect(response.status).toBe(201)
      expect(response.body.userInfo.newUser).toBeTruthy()
    })

    it('returns current user if successful and user email already exists', async () => {
      const currentUser = {
        email: 'a@a.com',
        username: 'aaaaaa',
      }
      const response = await request(server).post('/auth').send(currentUser)
      expect(response.type).toBe('application/json')
      expect(response.status).toBe(201)
      expect(response.body.userInfo.newUser).toBeTruthy()
    })

    it('returns 400 error if email is not defined', async () => {
      const error = {
        username: 'derek',
      }
      const response = await request(server).post('/auth').send(error)
      expect(response.type).toBe('application/json')
      expect(response.status).toBe(400)
    })
  })
})
