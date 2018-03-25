function EventController() {
  return this;
}

var todo = [];

EventController.prototype.create = function (body) {
  todo.push(body);
  return body;
};

EventController.prototype.getByDate = function (date) {
  return todo.filter(function(obj) {
    return obj.date === date;
  });
};

EventController.prototype.getSize = function() {
  return todo.length;
};

EventController.prototype.getAll = function () {
  return todo;
};

module.exports = EventController;
