const { Room, Cinema } = require("../model/model");

const roomController = {
    //POST DATA
    postData: async (req, res) => {
        try {
            const newRoom = new Room(req.body)
            const saveRoom = await newRoom.save();

            if (req.body.cinema) {
                const cinema = await Cinema.findById(req.body.cinema);
                await cinema.updateOne({ $push: { rooms: saveRoom._id } })
            }
            res.status(200).json(saveRoom)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET ALL DATA
    getAllData: async (req, res) => {
        try {
            const rooms = await Room.find();
            res.status(200).json(rooms)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET AN DATA
    getAnData: async (req, res) => {
        try {
            const room = await Room.findById(req.params.id);
            res.status(200).json(room)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = roomController;
