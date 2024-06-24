const { Chair, Room } = require("../model/model");

const chairController = {
    postData: async (req, res) => {
        try {
            const newChair = new Chair(req.body)
            const saveChair = await newChair.save();

            if (req.body.room) {
                const room = await Room.findById(req.body.room);
                await room.updateOne({ $push: { chairs: saveChair._id } })
            }
            res.status(200).json(saveChair)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET ALL DATA
    getAllData: async (req, res) => {
        try {
            const chairs = await Chair.find();
            res.status(200).json(chairs)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET AN DATA
    getAnData: async (req, res) => {
        try {
            const chair = await Chair.findById(req.params.id);
            res.status(200).json(chair)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = chairController;
