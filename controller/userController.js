const { User, Evaluation } = require('../model/model');

const userController = {
    // POST USER
    postUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(200).json('POST SUCCESSFULLY');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET ALL DATA
    getAllData: async (req, res) => {
        try {
            const users = await User.find().populate('evaluations');
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = userController;