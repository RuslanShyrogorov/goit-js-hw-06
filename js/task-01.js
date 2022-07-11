const ulCategoriesEl = document.querySelector('#categories');
function countNumberOfCategories(categories) {
  const numberOfCategories = categories.children.length;
  return `Number of categories: ${numberOfCategories}`;
};
console.log(countNumberOfCategories(ulCategoriesEl));



const liCategoriesEl = document.querySelectorAll('.item');
  for (const category of liCategoriesEl) {
      const name = category.querySelector('h2');
      const numbers = category.querySelectorAll('li');
      console.log(`Category: ${name.textContent}`);
      console.log(`Elements: ${numbers.length}`);
    }
