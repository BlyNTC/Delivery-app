const Sinon = require('sinon');
const { expect, request } = require('chai');
const loginService = require('../../services/loginService');
const { loginController }= require('../../controllers/loginController');
const rescue = require('express-rescue');
const { status } = require('../../utils/errorsMessages');

const userMock = {
  id: 1,
  email: 'teste@teste.com',
  name: 'teste',
  role: 'customer',
};

describe('LoginController', () => {
  const response = {};
  const request = {};
  describe('With valid user', () => {
    before(() => {
      Sinon.stub(loginService, 'loginService').resolves(userMock);
      request.body = {
        email: 'teste@teste.com',
        password: '123456',
      };
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns(userMock);
    });
    after(() => {
      loginService.loginService.restore();
    });
    it('should return user', async () => {
      await loginController(rescue(request, response));
      expect(response.status.calledWith(status.ok)).to.be.equal(true);
      expect(response.json.calledWith(userMock))
    });
  });
});