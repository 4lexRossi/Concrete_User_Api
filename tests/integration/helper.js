import supertest from 'supertest'
import chai from 'chai'
import setupApp from '../../src/server'

global.setupApp = setupApp
global.supertest = supertest
global.expect = chai.expect