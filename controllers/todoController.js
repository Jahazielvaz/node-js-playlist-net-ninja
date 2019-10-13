let bodyParser = require('body-parser');
// let mongoose = require('mongoose');

// Connect To DB
// mongoose.connect('mongodb://test:testing1@ds333238.mlab.com:33238/todo', {useNewUrlParser: true}, {useUnifiedTopology: true})

// Create Schema - Blueprint for your data
// let todoSchema = new mongoose.Schema({
//   item: String
// })

// Todo Model - Remember that the convention for models is tho have the first letter be capital
// let Todo = mongoose.model('Todo', todoSchema)

// let sampleItem = Todo({todo: 'This is totally working'}).save()

let data = [
  {item: 'Get Milk'},
  {item: 'Walk Dog'},
  {item: 'Kick some coding ass'}
]

module.exports = (app) => {
  let bodyParser = require('body-parser')
  let urlencoded = bodyParser.urlencoded({extended: false});

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data})
  }); //End of app.get

  app.post('/todo', urlencoded, (req, res) => {
    data.push(req.body)
    res.json(data)

  }); //End of app.post

  app.delete('/todo/:item', (req, res) => {
    data = data.filter((todo) => {
       return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });


} //End of module.exports
