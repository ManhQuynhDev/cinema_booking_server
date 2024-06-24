const paymentController = require("../controller/paymentController");

const router = require("express").Router();

router.get('/', paymentController.getAllData);

router.post('/', paymentController.postData);

router.get('/:id', paymentController.getAnData);

module.exports = router;
