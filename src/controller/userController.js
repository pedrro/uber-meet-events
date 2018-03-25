function UserController() {
  return this;
}

var users = [];

UserController.prototype.create = function (body) {
  users.push(body);
  return body;
};

UserController.prototype.getSize = function() {
  return users.length;
};

UserController.prototype.getAll = function () {
  return users;
};

module.exports = UserController;
