const { Payment } = require("../model/model");

const paymentController = {
    //GET ALL 
    getAllData: async (req, res) => {
        try {
            const payments = await Payment.find();
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json(500);
        }
    },
    //POST
    postData: async (req, res) => {
        try {
            const newPayment = new Payment(req.body);
            const savePayment = await newPayment.save();
            res.status(200).json(savePayment);
        } catch (error) {
            res.status(500).json(500);
        }
    },
    //GET AN
    getAnData: async (req, res) => {
        try {
            const payment = await Payment.findById(req.params.id);
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json(500);
        }
    },

}

module.exports = paymentController;
