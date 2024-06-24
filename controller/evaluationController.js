const { Evaluation, User, Movie } = require('../model/model');

const evaluationController = {
    //Post 
    postEvaluation: async (req, res) => {
        try {
            const newEvaluation = new Evaluation(req.body)
            await newEvaluation.save()

            if (req.body.user) {
                const user = await User.findById(req.body.user);
                await user.updateOne({ $push: { evaluations: newEvaluation._id } })
            }

            if (req.body.movie) {
                const movie = await Movie.findById(req.body.movie);
                await movie.updateOne({ $push: { evaluations: newEvaluation._id } })
            }

            res.status(200).json("ADD SuccessFully")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllData: async (req, res) => {
        try {
            const evaluations = await Evaluation.find().populate('user')
            res.status(200).json(evaluations);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
module.exports = evaluationController;