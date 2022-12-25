const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// OLD METHOD (for)

// const ingredientsListRef = document.querySelector('#ingredients');

// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsListItemRef = document.createElement('li');
//   ingredientsListItemRef.classList.add('item');
//   ingredientsListItemRef.textContent = ingredients[i];

//   items.push(ingredientsListItemRef);
// }

// console.log(items);

// ingredientsListRef.append(...items);

// NEW METHOD (map)

// const ingredientsListRef = document.querySelector('#ingredients');

// const items = ingredients.map(ingredient => {
//   const ingredientsListItemRef = document.createElement('li');
//   ingredientsListItemRef.classList.add('item');
//   ingredientsListItemRef.textContent = ingredient;
  
//   return ingredientsListItemRef;
// }); 

// console.log(items);

// ingredientsListRef.append(...items);

// function

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientsList = (ingredients) => {
  return ingredients.map(ingredient => {
    const ingredientsListItemRef = document.createElement('li');
    ingredientsListItemRef.classList.add('item');
    ingredientsListItemRef.textContent = ingredient;

    return ingredientsListItemRef;
})
};

const items = makeIngredientsList(ingredients);

ingredientsListRef.append(...items);

