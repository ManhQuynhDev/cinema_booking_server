const { Cinema } = require("../model/model");

const cinemaController = {
    //GET ALL
    getAllData: async (req, res) => {
        try {
            const cinemas = await Cinema.find().populate('movie');
            res.status(200).json(cinemas)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //POST DATA 
    postData: async (req, res) => {
        try {
            const newCinema = new Cinema(req.body);
            const saveCinema = await newCinema.save();
            res.status(200).json(saveCinema)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET AN
    getAnData: async (req, res) => {
        try {
            const cinema = await Cinema.findById(req.params.id);
            res.status(200).json(cinema)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}
module.exports = cinemaController;
