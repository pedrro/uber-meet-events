function EventController() {
  return this;
}

var events = [];

EventController.prototype.create = function (body) {
  events.push(body);
  return body;
};

EventController.prototype.getByDate = function (date) {
  return events.filter(function(obj) {
    return obj.date === date;
  });
};

EventController.prototype.getSize = function() {
  return events.length;
};

EventController.prototype.getAll = function () {
  return events;
};

module.exports = EventController;
