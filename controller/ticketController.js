const { Ticket } = require("../model/model");

const ticketController = {
    //GET ALL DATA
    getAllData: async (req, res) => {
        try {
            const tickets = await Ticket.find();
            res.status(200).json(tickets);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    postData : async (req,res) => {
        try {
            const newTicket = new Ticket(req.body);
            const saveTicket = await newTicket.save();
            res.status(200).json(saveTicket);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAnData: async (req, res) => {
        try {
            const ticket = await Ticket.findById(req.params.id);
            res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
module.exports = ticketController;
