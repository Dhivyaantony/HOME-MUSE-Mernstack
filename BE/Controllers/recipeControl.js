const RecipesModel  = require('../Model/RecipesModel');

// Controller function to add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, imageUrl, cookingTime, userOwner } = req.body;
    
    // Create a new recipe document
    const newRecipe = new RecipesModel({
      name,
      ingredients,
      instructions,
      imageUrl,
      cookingTime,
      userOwner // Assuming you have a user ID available in the request
    });

    // Save the new recipe to the database
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const getRecipes = async (req, res) => {
    try {
      // Fetch all recipes from the database
      const recipes = await RecipesModel.find();
      res.json(recipes); // Send the list of recipes as JSON response
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  const getUserRecipes = async (req, res) => {
    try {
      // Assuming user information is available in req.user after authentication
      const userId = req.params.userId; // Extract userId from request parameters
      console.log("ssssssssss",userId)
      // Use userId to fetch recipes for the authenticated user
      const userRecipes = await RecipesModel.find({ userOwner: userId }); // Find recipes owned by the user
      console.log(userRecipes)
      res.json(userRecipes); // Send user recipes as JSON response
    } catch (error) {
      console.error('Error fetching user recipes:', error);
      res.status(500).json({ message: 'Internal server error' }); // Handle error
    }
  };
  const editRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
    const { name, ingredients, instructions, imageUrl, cookingTime } = req.body;
  
    try {
      const updatedRecipe = await RecipesModel.findByIdAndUpdate(recipeId, {
        name,
        ingredients,
        instructions,
        imageUrl,
        cookingTime
      }, { new: true });
  
      res.json(updatedRecipe);
    } catch (error) {
      console.error('Error updating recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete Recipe
  const deleteRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
  
    try {
      await RecipesModel.findByIdAndDelete(recipeId);
      res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      console.error('Error deleting recipe:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
module.exports = {getUserRecipes,
  addRecipe,getRecipes,deleteRecipe,editRecipe
};
