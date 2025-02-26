const express=require('express');
const router=express.Router();

const {addRecipe, deleteRecipe, updateRecipe,getAllRecipes}=require('../controllers/recipeController');
router.post('/',addRecipe);
module.exports=router;