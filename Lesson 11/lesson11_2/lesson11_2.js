const container = document.getElementById('container');

fetch("https://dummyjson.com/recipes")
.then(res => res.json())
.then(recipesObject => {
    const {recipes} = recipesObject;
    for (const recipe of recipes) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('recipe-wrapper');

        let recipeDiv = document.createElement('div');
        recipeDiv.innerText = `
        Name: ${recipe.name}
        ID: ${recipe.id}
        User Id: ${recipe.userId}
        Calories: ${recipe.caloriesPerServing} kkal
        Cooking time: ${recipe.cookTimeMinutes} minutes
        Cuisine: ${recipe.cuisine}
        Difficulty: ${recipe.difficulty}
        Preparation Time: ${recipe.prepTimeMinutes} minutes
        Meal type: ${recipe.mealType.join(' ')}
        Rating: ${recipe.rating}
        Review: ${recipe.reviewCount}
        Servings: ${recipe.servings}
        Tags: ${recipe.tags.join(' ')}
        Ingredients:   
        `

         let ingredientsUl =document.createElement('ul');
        ingredientsUl.classList.add('ingredients');
         for (const item of recipe.ingredients) {
             let ingredientLi = document.createElement('li');
               ingredientLi.append(item);
             ingredientsUl.append(ingredientLi)
        }

         let instructionsWrapper = document.createElement('p');
         for (const instruction of recipe.instructions) {
             instructionsWrapper.append(instruction + ' ');
         }

         let image = document.createElement('img');
         image.classList.add('image');
         image.src = recipe.image;
         recipeDiv.prepend(image);

         wrapper.append(recipeDiv, ingredientsUl, instructionsWrapper)
        container.appendChild(wrapper)
    }

})