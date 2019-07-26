const Category = require('./category.model');

// Gets a list of category
function index(req, res) {
    return Category.find().exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
  }
  
  // Create category
  function create(req, res) {
    return Category.create(req.body)
      .then(respondWithResult(res, 201))
      .catch(handleError(res));
  }
  
  // Gets a single category from the DB
  function show(req, res) {
    return Category.findById(req.params.id).exec()
      .then(handleEntityNotFound(res))
      .then(respondWithResult(res))
      .catch(handleError(res));
  }

  function respondWithResult(res, code) {
    const statusCode = code || 200;
    return (entity) => {
      if (entity) {
        res.status(statusCode).json(entity);
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
  };