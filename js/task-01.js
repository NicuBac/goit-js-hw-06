const categoriesList = document.getElementById("categories");
const categoryItems = document.querySelectorAll(".item");

console.log("Number of categories:", categoryItems.length);

for (const category of categoryItems) {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");

  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements.length);
}
