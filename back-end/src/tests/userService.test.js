const Sinon = require('sinon');
const { expect } = require('chai');
const userService = require('../services/userService');
const { User } = require('../database/models');

const userMock = {
  dataValues: {
    id: 1,
  },
};

describe('UserService', () => {
  describe('Create with valid user', () => {
    before(() => {
      Sinon.stub(User, 'create').resolves(userMock);
    });
    after(() => {
      User.create.restore();
    });
    it('should return user with token', async () => {
      const user = await userService.create({
        name: 'teste',
        email: 'teste@teste.com',
        password: '123456',
      });
      expect(user).to.be.an('object');
      expect(user).to.have.property('id', 1);
      expect(user).to.have.property('email', 'teste@teste.com');
      expect(user).to.have.property('name', 'teste');
      expect(user).to.have.property('token');
    });
  });
});