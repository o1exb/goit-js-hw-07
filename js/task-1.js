const listItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsNumbers = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsNumbers}`);
});
