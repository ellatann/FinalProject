// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({

    ingredients: {
        type: [String],
    },
    time:{
        type: Number,
    },
    dietary: {
        type: String,
        enum: ["regular","vegan"],
        default: "regular"
    }
});

const DinnerSchema = new Schema({
    date:{
        type: Date,
    },
    main:{
        type: RecipeSchema,
        // type: String,
        // enum: ["chicken","beef","pork","tofu"],
        // default:"chicken",
    },

    side: {
        type: RecipeSchema,
        // enum: ["potatoes","salad","veggies","fries"],
        // default:"veggies",
    },
});

var Recipe = mongoose.model("Recipe", RecipeSchema);
var Dinner = mongoose.model("Dinner", DinnerSchema);
module.exports = {Recipe, Dinner}
