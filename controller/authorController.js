const { Author } = require('../model/model');
const authorController = {
    //POST AUTHOR
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor)
        } catch (err) {
            res.status(500).json(err);//HTTP REQUEST CODE
        }
    },
    //GET ALL AUTHOR
    getAllAuthors: async (req, res) => {
        try {
            const authors = await Author.find().populate('movies');
            res.status(200).json(authors)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET AN AUTHOR
    getAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate('movies');
            res.status(200).json(author)
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = authorController;
