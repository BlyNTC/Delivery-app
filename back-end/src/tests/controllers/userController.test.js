const { expect } = require("chai");
const Sinon = require("sinon");
const userController = require("../../controllers/userController");
const userService = require("../../services/userService");
const { status } = require("../../utils/errorsMessages");

const createUserMock = {
  id: 1,
  email: "teste@teste.com",
  name: "teste",
  role: "customer",
};

describe("UserController", () => {
  const response = {};
  const request = {};
  const next = Sinon.spy();

  describe("When creates a new user successfully,", () => {
    describe("when succesful,", () => {
      before(() => {
        Sinon.stub(userService, "create").resolves(createUserMock);
        request.body = {
          name: "teste",
          email: "teste@teste.com",
        };
        after(() => {
          userService.userService.restore();
        });
        it("should return a user with token", async () => {
          await userController.create(request, response, next);
          console.log("====>", response);
          expect(response.status).to.have.been.calledWith(status.created);
          expect(response.json).to.have.been.calledWith(createUserMock);
        });
      });
    });
  });
});
