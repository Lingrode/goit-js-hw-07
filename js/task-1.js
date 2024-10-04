const categoriesItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoriesHeader = item.querySelector("h2");
  const elementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesHeader.textContent}`);
  console.log(`Elements: ${elementsCount}`);
});
