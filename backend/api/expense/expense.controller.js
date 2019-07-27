const Expense = require('./Expense.model');

// Gets a list of Expense
function index(req, res) {
  return Expense.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Get a total
function total(req, res) {
  return Expense.find().exec()
    .then(() => {

      let total = 0;

      if (res.length > 0) {

        res.forEach(element => {
          total += element.value;
        });
      }

      respondWithResult(total)
    })
    .catch(handleError(res));
}

// Create Expense
function create(req, res) {
  return Expense.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Gets a single Expense from the DB
function show(req, res) {
  return Expense.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function respondWithResult(res, code) {
  const statusCode = code || 200;
  return (entity) => {
    if (entity) {
      let response = {
        status: statusCode,
        data: entity
      };
      res.status(statusCode).json(response);
    }
  };
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

module.exports = {
  create,
  show,
  index,
  total
};