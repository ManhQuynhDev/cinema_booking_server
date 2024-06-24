const categoryController = require('../controller/categoryController');

const router = require('express').Router();

router.get('/', categoryController.getAllData)

router.post('/', categoryController.postCategory)

module.exports = router;
