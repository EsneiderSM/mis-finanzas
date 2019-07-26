const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routeConfig = require('./routes');


//app
const app = express();
routeConfig(app);

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//routes
const profileApiRouter = require('./router/api/ProfileApi');
const expenseApiRouter = require('./router/api/ExpenseApi');
const config = require('./config/environment');



// Connect to MongoDB
mongoose.connect(config.mongo.uri, { useNewUrlParser: true });
debugger
mongoose.connection.on('error', (err) => {
  console.error('Error', 'MongoDB connection error', {
    data: err,
    time: new Date().toISOString(),
  });
  process.exit(-1);
});

const server = app.listen(5700, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
})