const { Favorite, User, Movie } = require('../model/model');

const favoriteController = {
    //POST FAVORITE
    allFavorite: async (req, res) => {
        try {
            const newFavorite = new Favorite(req.body)
            await newFavorite.save()

            if (req.body.user) {
                const user = await User.findById(req.body.user);
                await user.updateOne({ $push: { favorites: newFavorite._id } })
            }

            if (req.body.movie) {
                const movie = await Movie.findById(req.body.movie);
                await movie.updateOne({ $push: { favorites: newFavorite._id } })
            }
            res.status(200).json("ADD SuccessFully")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET ALL
    getAll: async (req, res) => {
        try {
            const favorites = await Favorite.find().populate('movie');
            res.status(200).json(favorites)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //DELETE 
    deleteFavorite: async (req, res) => {
        try {
            await User.updateMany({ favorites: req.params.id }, { $pull: { favorites: req.params.id } })
            await Movie.updateMany({ favorites: req.params.id }, { $pull: { favorites: req.params.id } })
            await Favorite.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Favorite Success")
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = favoriteController