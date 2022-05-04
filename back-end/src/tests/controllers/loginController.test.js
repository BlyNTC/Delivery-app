const { expect } = require("chai");
const Sinon = require("sinon");
const loginController = require("../../controllers/loginController");
const loginService = require("../../services/loginService");
const { status } = require("../../utils/errorsMessages");

const userMock = {
  id: 1,
  email: "teste@teste.com",
  name: "teste",
  role: "customer",
};

describe("LoginController", () => {
  const response = {};
  const request = {};
  const next = Sinon.spy();

  describe("With valid user,", () => {
    describe("when succesful,", () => {
      before(() => {
        Sinon.stub(loginService, "loginService").resolves(userMock);
        request.body = {
          email: "teste@teste.com",
          password: "123456",
        };
        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();
      });
      after(() => {
        loginService.loginService.restore();
      });
      it("should return status 200", async () => {
        await loginController.loginController(request, response, next);
        expect(response.status.calledWith(200)).to.be.equal(true);
        expect(response.json.calledWith(userMock));
      });
    });
  });
});
