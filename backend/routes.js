

// New Line
const category = require('./api/category');

module.exports = (app) => {
  app.use('/api/category', category);
};