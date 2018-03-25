var app = require('./app.js');

app.listen((process.env.PORT || 5000), function() {
  console.log('Insert events on port: ' + process.env.PORT || 5000);
});
