const authorController = require('../controller/authorController');

const router = require('express').Router();

router.get('/', authorController.getAllAuthors)

router.post('/', authorController.addAuthor)

router.get('/:id', authorController.getAnAuthor)

module.exports = router;
