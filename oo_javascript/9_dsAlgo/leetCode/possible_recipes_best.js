var findAllRecipes = function (recipes, ingredients, supplies) {
    const suppliesSet = new Set(supplies);
    const recipesMap = new Map();
    const visited = new Set();
    const result = [];

    function canCreate(recipe) {
        if (suppliesSet.has(recipe)) return true;

        // the check recipesMap.has(recipe) ===> useless
        if (!recipesMap.has(recipe) || visited.has(recipe)) return false;

        visited.add(recipe);

        const recipeIdx = recipesMap.get(recipe);
        for (let i = 0; i < ingredients[recipeIdx].length; i++) {
            if (!canCreate(ingredients[recipeIdx][i])) return false;
        }

        suppliesSet.add(recipe);
        return true;
    }

    for (let i = 0; i < recipes.length; i++) {
        recipesMap.set(recipes[i], i);
    }

    for (const recipe of recipes) {
        if (canCreate(recipe)) result.push(recipe);
    }

    return result;
};

r = require('./possible_recipes_r.json');
i = require('./possible_recipes_i.json');
s = require('./possible_recipes_s.json');

let resp = findAllRecipes(r,i,s);
console.log("resp ===> ", resp)