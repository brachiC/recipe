const mongoose = require('mongoose')

const RecipesSchema=new mongoose.Schema({
    nameRecipe:String,
    categoryRecipe:String,
    interduction:[] //?
})

module.exports=mongoose.model('recipe',RecipesSchema)