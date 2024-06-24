const movieController = require('../controller/movieController')

const router = require('express').Router()

router.get('/', movieController.getAllData)

router.post('/', movieController.postData)

router.get('/page',movieController.getPageData);

module.exports = router;