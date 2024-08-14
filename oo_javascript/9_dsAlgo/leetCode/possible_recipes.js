// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/description/

/*
    recipe = string array
    ingredients = 2D string array       recipe[i] needs ingredients[i]

*/

var isSubset = (arr1, arr2) => {
    let s2 = new Set(arr2);
    for(let i=0; i<arr1.length; i++) {
        if(!s2.has(arr1[i])) return false
    }
    return true
}

var isSubset = (arr1, arr2) => {
    let s2 = new Set(arr2);
    for(let i=0; i<arr1.length; i++) {
        if(!s2.has(arr1[i])) return false
    }
    return true
}

var findAllSupplies = (recipes, ingredients, supplies) => {
    let prevSupplies = supplies.length;
    do {
        prevSupplies = supplies.length;
        // console.log("prev supplies length ==> ", prevSupplies)
        for(let i=0; i<recipes.length; i++) {
            let needed_ing = ingredients[i];
            if(isSubset(needed_ing, supplies) && !supplies.includes(recipes[i])) { 
                // console.log("pushing this recipe into new_supplies ===> ", recipes[i])
                supplies.push(recipes[i]);
            }
        }
        // console.log("compare ===> ", prevSupplies, supplies.length)
    } while(prevSupplies != supplies.length);

    return supplies;
}

var findAllRecipes = function(recipes, ingredients, supplies) {
    var all_supplies = findAllSupplies(recipes, ingredients, supplies);
    let validRecipes = [];
    for(let i=0; i<recipes.length; i++) {
        let needed_ing = ingredients[i];
        if(isSubset(needed_ing, all_supplies)) {
            validRecipes.push(recipes[i]);
        }
    }
    return validRecipes;
};



r = require('./possible_recipes_r.json');
i = require('./possible_recipes_i.json');
s = require('./possible_recipes_s.json');

let resp = findAllRecipes(r,i,s);
console.log("resp ===> ", resp)