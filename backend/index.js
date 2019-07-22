const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

//app
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//routes
const profileApiRouter = require('./router/api/ProfileApi');
const expenseApiRouter = require('./router/api/ExpenseApi');


//routes
app.use('/api/profiles', profileApiRouter);
app.use('/api/expenses', expenseApiRouter);

const server = app.listen(5700, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
})