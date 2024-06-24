const cinemaController = require("../controller/cinemaController");

const router = require("express").Router();

router.get('/', cinemaController.getAllData);

router.post('/', cinemaController.postData);

router.get('/', cinemaController.getAnData);

module.exports = router;
