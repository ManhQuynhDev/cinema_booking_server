const { Actor, Movie } = require('../model/model');
const actorController = {
    //POST AUTHOR
    addActor: async (req, res) => {
        try {
            const newActor = new Actor(req.body);
            const saveActor = await newActor.save();

            if (req.body.movies && req.body.movies.length > 0) {
                for (const movie of req.body.movies) {
                    await Movie.updateOne({ _id: movie._id }, { $push: { actors: saveActor._id } });
                }
            }
            res.status(200).json(saveActor);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //GET ALL AUTHOR
    getAllActors: async (req, res) => {
        try {
            const actors = await Actor.find().populate('movies');
            res.status(200).json(actors)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = actorController;
