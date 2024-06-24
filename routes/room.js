const roomController = require("../controller/roomController");

const router = require("express").Router();

router.get('/', roomController.getAllData);

router.post('/', roomController.postData);

router.get('/:id', roomController.getAnData);

module.exports = router;
