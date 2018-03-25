var express = require('express');
var bodyParser = require('body-parser');
var Joi = require('joi');
var EventController = require('./controller/eventController.js');

var app = express();
var router = express.Router();
var eventController = new EventController();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var todo = [];

/* ROUTES */
var events = router.route('/events');
var event = router.route('/event');

/* END-POINT */
event.post(function(request, response) {
  var eventValidation = Joi.object().keys({
        'id': Joi.string().guid(),
        'fromPlace': Joi.string(),
        'toPlace': Joi.string(),
        'date': Joi.date().format('YYYY-MM-DD'),
        'hour': Joi.string()
    });

    Joi.validate(request.body, eventValidation, function(err, value) {
        if (err === null) {
            console.log('insert event' + request.body);
            response.json(eventController.create(request.body));
        } else {
            response.status(400).send('errors on request: ' + err);
        }
    });
});

events.get(function(request, response) {
  console.log('return all events');
  response.json(eventController.getAll(request.params.date));
});

app.use('/', router);

module.exports = app;
