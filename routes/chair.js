const chairController = require("../controller/chairController");

const router = require("express").Router();

router.get('/', chairController.getAllData);

router.post('/', chairController.postData);

router.get('/:id', chairController.getAnData);

module.exports = router;
