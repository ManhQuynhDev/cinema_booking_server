const { Category, Movie } = require('../model/model')

const categoryController = {
    postCategory: async (req, res) => {
        try {
            const newCategory = new Category(req.body);
            const saveCategory = await newCategory.save();
            res.status(200).json(saveCategory)
        } catch (err) {
            res.status(500).json(err);//HTTP REQUEST CODE
        }
    },
    getAllData: async (req, res) => {
        try {
            const category = await Category.find().populate('movies');
            res.status(200).json(category)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = categoryController;