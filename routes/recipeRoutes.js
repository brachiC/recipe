const express=require('express');
const router=express.Router();

const {addRecipe, deleteRecipe,getRecipeById, updateRecipe,getAllRecipes}=require('../controllers/recipeController');
router.post('/',addRecipe);
router.get('/',getAllRecipes);
router.delete('/:_id',deleteRecipe);
router.get('/:_id',getRecipeById);
module.exports=router;