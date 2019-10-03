let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// CUSTOM MODULES
let todoController = require('./controllers/todoController');


let urlencoded = bodyParser.urlencoded({extended: false});

//Template Engine
app.set('view engine', 'ejs')

//Static Files
app.use(express.static('./public'));

// Fire Controllers



app.listen(3000);
console.log('Application running on port 3000');
