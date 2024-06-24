const evaluationController = require('../controller/evaluationController');

const router = require('express').Router();

router.get('/', evaluationController.getAllData)

router.post('/', evaluationController.postEvaluation)

module.exports = router;
