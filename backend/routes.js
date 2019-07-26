const category = require('./api/category');
const expense = require('./api/expense');

module.exports = (app) => {
  app.use('/api/category', category);
  app.use('/api/expense', expense);
};