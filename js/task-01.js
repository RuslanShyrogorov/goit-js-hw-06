const ulCategoriesEl = document.querySelector('#categories');
// function countNumberOfCategories(categories) {
//   const numberOfCategories = categories.children.length;
//   return `Number of categories: ${numberOfCategories}`;
// };
console.log(`Number of categories: ${ulCategoriesEl.children.length}`);



const liCategoriesEl = ulCategoriesEl.querySelectorAll('.item');
  // for (const category of liCategoriesEl) {
  //     const name = category.querySelector('h2');
  //     const numbers = category.querySelectorAll('li');
  //     console.log(`Category: ${name.textContent}`);
  //     console.log(`Elements: ${numbers.length}`);
  // }
    
// liCategoriesEl.forEach((element) => {
//   const name = element.querySelector('h2');
//   const numbers = element.querySelectorAll('li');
//   console.log(`Category: ${name.textContent}`);
//   console.log(`Elements: ${numbers.length}`);
// })

[...liCategoriesEl].map((element) => {
  const name = element.querySelector('h2');
  const numbers = element.querySelectorAll('li');
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${numbers.length}`);
})
