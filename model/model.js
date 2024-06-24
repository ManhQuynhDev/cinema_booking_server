const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    actors:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Actor"
            }
        ],
    describe: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    image: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    trailer: {
        type: String,
        require: true
    },
    evaluations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Evaluation"
        }
    ],
    configs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Config"
        }
    ],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Favorite"
        }
    ]
})
let configSchema = mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    timeStart: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    configMovie: {
        type: String,
        require: true
    }
})
let userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        require: true
    },
    avatar: {
        type: String,
    },
    evaluations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Evaluation"
        }
    ],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Favorite"
        }
    ]
})
let authorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    nationality: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})

let actorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    avatar: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
})
let evaluationSchema = mongoose.Schema({
    ratings: {
        type: Number,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})

let favoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: Boolean,
        require: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
})

let CinemaSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
})
let RoomSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    cinema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cinema"
    },
    chairs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chair"
        }
    ]
})
let ChairSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    status: {
        type: Boolean,
        require: true
    }
})
let TicketSchema = mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    chair: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chair"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    }
})
let PaymentSchema = mongoose.Schema({
    typePayment: {
        type: String,
        require: true
    }
})

let Movie = mongoose.model("Movie", movieSchema);
let User = mongoose.model("User", userSchema);
let Author = mongoose.model('Author', authorSchema);
let Actor = mongoose.model('Actor', actorSchema);
let Category = mongoose.model('Category', categorySchema);
let Evaluation = mongoose.model('Evaluation', evaluationSchema)
let Favorite = mongoose.model("Favorite", favoriteSchema);
const Payment = mongoose.model("Payment", PaymentSchema);
const Chair = mongoose.model("Chair", ChairSchema);
const Cinema = mongoose.model("Cinema", CinemaSchema);
const Room = mongoose.model("Room", RoomSchema);
const Ticket = mongoose.model('Ticket', TicketSchema);
const Config = mongoose.model('Config', configSchema);

module.exports =
{
    Movie,
    User,
    Author,
    Actor,
    Category,
    Evaluation,
    Favorite,
    Payment,
    Chair,
    Cinema,
    Room,
    Ticket,
    Config
};