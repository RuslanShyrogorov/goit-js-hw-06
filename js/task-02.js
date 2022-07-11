const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemsIngredient = ingredients.map((ingredient) => {
  const itemIngredientEl = document.createElement('li');
  itemIngredientEl.textContent = ingredient;
  itemIngredientEl.classList.add('item');
  return itemIngredientEl;
})

const listIngredientsEl = document.querySelector('#ingredients');
listIngredientsEl.append(...itemsIngredient);