// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/description/

/*
    recipe = string array
    ingredients = 2D string array       recipe[i] needs ingredients[i]

*/
var recipes = ["bread","sandwich","burger"];
var ingredients = [
    ["yeast","flour"],
    ["bread","meat"],
    ["sandwich","meat","bread"]
]; 
var supplies = ["yeast","flour","meat"];

var findAllRecipes = function(recipes, ingredients, supplies) {
    for(let i=0; i<recipes.length; i++) {
        let needed_ing = ingredients[i];
        
    }      
};