const express = require('express');
const router = express.Router();
const { userAuth } = require('../middlewares/authorization');
const { addRecipe, getRecipes,getUserRecipes,deleteRecipe, editRecipe } = require('../Controllers/recipeControl');

// Route to add a new task
router.post('/addRecipe', addRecipe); // Define the route for adding a task
router.get('/getRecipes',getRecipes);
router.get('/getUserRecipes/:userId', getUserRecipes);
// Route to delete a recipe by ID
router.delete('/deleteRecipe/:recipeId', deleteRecipe);

// Route to update a recipe by ID
router.put('/editRecipe/:recipeId', editRecipe);



module.exports = router;
