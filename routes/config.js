const configController = require('../controller/configController');

const router = require('express').Router();

router.get('/', configController.getAllData)

router.post('/', configController.postData)

module.exports = router;
