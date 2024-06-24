const actorController = require('../controller/actorControoler');

const router = require('express').Router();

router.get('/', actorController.getAllActors)

router.post ('/', actorController.addActor)

module.exports = router;
