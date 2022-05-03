const Sinon = require('sinon');
const { expect } = require('chai');
const loginService  = require('../services/loginService');
const { User } = require('../database/models');

const userMock = {
  id: 1,
  email: 'teste@teste.com',
  name: 'teste',
  role: 'customer',
};

describe('LoginService', () => {
  describe('With valid user', () => {
    before(() => {
      Sinon.stub(User, 'findOne').resolves(userMock);
    });
    after(() => {
      User.findOne.restore();
    });
    it('should return user', async () => {
      const user = await loginService.loginService({
        email: 'teste@teste.com',
        password: '123456',
      });
      expect(user).to.be.an('object');
      expect(user).to.have.property('id', 1);
      expect(user).to.have.property('email', 'teste@teste.com');
      expect(user).to.have.property('name', 'teste');
      expect(user).to.have.property('role', 'customer');
      expect(user).to.have.property('token');
    });
  });
  describe('With invalid user', () => {
    before(() => {
      Sinon.stub(User, 'findOne').resolves(null);
    });
    after(() => {
      User.findOne.restore();
    });
    it('should throw error', async () => {
      try {
        await loginService.loginService({
          email: 'naoexiste@mail.com',
          password: '123456',
        });
      } catch (error) {
        expect(error).to.have.property('code', 404);
        expect(error).to.have.property('message', 'User does not exist');
      }
    });
  });
});