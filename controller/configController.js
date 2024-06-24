const { Config, Movie } = require("../model/model");

const configController = {
    getAllData: async (req, res) => {
        try {
            const configs = await Config.find();
            res.status(200).json(configs)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    postData: async (req, res) => {
        try {
            const newConfig = new Config(req.body)
            const saveConfig = await newConfig.save();

            if(req.body.movie) {
                const movie = await Movie.findById(req.body.movie);
                await movie.updateOne({ $push: { configs: saveConfig._id } })
            }

            res.status(200).json(saveConfig)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = configController;
