const express=require('express');
const router=express.Router();

const {addRecipe, deleteRecipe, updateRecipe,getAllRecipes}=require('../controllers/recipeController');
router.post('/',addRecipe);
router.get('/',getAllRecipes);
router.delete('/:_id',deleteRecipe);
module.exports=router;