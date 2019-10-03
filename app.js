let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();

// Template Engine
app.set('view engine', 'ejs');

// Static File
app.use(express.static('./public'));

// Fire Controllers
todoController(app);

app.listen(3000);
console.log("You're listening to port 3000");
