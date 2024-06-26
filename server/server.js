var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('./data');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);

app.get('/api/habits/', function (req, res) {
  res.send(data.habits);
});

app.post('/api/habits', function (req, res) {
    console.log(`Post received from habits:${req.body.title}`);
    let habit = req.body;
    habit.id = data.habits.length + 1;
    habit.count = 0;
    data.habits.push(habit);
    res.send(habit);
  });

app.get('/api/account/:id', function(req, res) {
  console.log('Accessing Account');
  console.log(req.params.id);
  const account = data.accounts[req.params.id];
  res.send(account.info);
});

app.get('/api/account/:id/habits', function(req, res) {
  console.log('Accessing Account Habits');
  console.log(req.params.id);
  const account = data.accounts[req.params.id];
  res.send(account.habits);
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});