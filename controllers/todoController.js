let dataStorage = [
  {item: 'Get Milk'},
  {item: 'Walk Dog'},
  {item: 'Kick some coding ass'}
]

module.exports = (app) => {
  let bodyParser = require('body-parser')
  let urlencoded = bodyParser.urlencoded({extended: false});

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: dataStorage})
  });

  app.post('/todo', urlencoded, (req, res) => {

  });

  app.delete('/todo', (req, res) => {

  });
}
