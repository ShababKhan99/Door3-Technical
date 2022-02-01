const express = require('express');
const router = express.Router();

// Subrouters;
const booksRouter = require('./books');
const authorsRouter = require('./authors');

// Mount our subrouters to assemble our apiRouter;
router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;