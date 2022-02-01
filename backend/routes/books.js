const express = require('express');
const router = express.Router();
const { Book, Author } = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');

/** GET ALL BOOKS: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get('/', ash(async(req, res) => {
  let books = await Book.findAll({include: [Author]});
  res.status(200).json(books);
}));

/** GET BOOK BY ID */
router.get('/:id', ash(async(req, res) => {
  let book = await Book.findByPk(req.params.id, {include: [Author]});
  res.status(200).json(book);
}));

/** ADD NEW BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body)
    .then(createdBook => res.status(200).json(createdBook))
    .catch(err => next(err));
});

/** DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a Book!"))
    .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
  await Book.update(req.body,
        { where: {id: req.params.id} }
  );
  let book = await Book.findByPk(req.params.id);
  res.status(201).json(Book);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;