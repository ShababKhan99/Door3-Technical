const express = require('express');
const router = express.Router();
const { Book, Author } = require('../database/models');

const ash = require('express-async-handler');


/** GET ALL AUTHORS */

router.get('/', ash(async(req, res) => {
  let authors = await Author.findAll({include: [Book]});
  res.status(200).json(authors);
}));

/** GET AUTHOR BY ID*/
router.get('/:id', ash(async(req, res) => {
  let author = await Author.findByPk(req.params.id, {include: [Book]});
  res.status(200).json(author);
}));

// Delete Author
router.delete('/:id', ash(async(req, res) => {
  await Author.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Deleted a Author!");
}));

// Add new Author
router.post('/', ash(async(req, res) => {
  let newAuthor = await Author.create(req.body);
  res.status(200).json(newAuthor);
}));

// Edit Author
router.put('/:id', ash(async(req, res) => {
  await Author.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let author = await Author.findByPk(req.params.id, {include: [Book]});
  res.status(201).json(author);
}))

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;