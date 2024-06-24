const { Movie, Category, Actor, Evaluation, Author } = require('../model/model')

const movieController = {
    //GET ALL DATA
    getAllData: async (req, res) => {
        try {
            const movies = await Movie.find()
                .populate('actors');
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getPageData: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 3;
            console.log(page)
            console.log(limit)
            const skip = (page - 1) * limit;
            const movies = await Movie.find()
                .populate('actors')
                .skip(skip)
                .limit(limit);
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    postData: async (req, res) => {
        try {
            const newMovie = new Movie(req.body)
            await newMovie.save()
            if (req.body.category) {
                const category = await Category.findById(req.body.category);
                await category.updateOne({ $push: { movies: newMovie._id } })
            }
            if (req.body.author) {
                const author = await Author.findById(req.body.author);
                await author.updateOne({ $push: { movies: newMovie._id } });
            }
            if (req.body.actors && req.body.actors.length > 0) {
                const actors = req.body.actors;
                for (const actor of actors) {
                    await Actor.updateOne(
                        { _id: actor },
                        { $push: { movies: newMovie._id } }
                    );
                }
            }
            res.status(200).json('Add successFully');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = movieController