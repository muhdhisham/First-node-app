const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expressHbs = require('express-handlebars')
const users = [];


// app.engine('hbs',expressHbs.engine());

app.engine('hbs',expressHbs.engine({ layoutsDir:'views/layouts/', defaultLayout: 'main-layout', extname:'hbs' }));
app.engine('hbs', expressHbs.engine({ defaultLayout: 'main-layout', extname: 'hbs' }));

app.set('view engine', 'hbs');
app.set('views','views');


app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res,next) => {
    res.render('index', {pageTitle:'Add User'})
});

app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users,
      hasUsers: users.length > 0
    });
  }); 

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    console.log(users)
    res.redirect('/users');
});





app.listen(3000);