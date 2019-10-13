let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();

// Template Engine
app.set('view engine', 'ejs');

// Static File
app.use(express.static('./public'));

// Fire Controllers
todoController(app);

// Server
let port = 5000;
app.listen(port);
console.log(`You're listening to port ${port}`);
