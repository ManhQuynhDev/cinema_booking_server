const favoriteController = require('../controller/favoriteController');

const router = require('express').Router();

router.get('/', favoriteController.getAll)

router.post('/', favoriteController.allFavorite)

router.delete('/:id',favoriteController.deleteFavorite);
module.exports = router;
