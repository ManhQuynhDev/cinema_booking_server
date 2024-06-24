const userController = require('../controller/userController');

const router = require('express').Router();

router.get('/', userController.getAllData)

router.post('/', userController.postUser)

module.exports = router