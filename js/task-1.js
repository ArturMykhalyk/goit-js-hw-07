const categories = document.querySelector("#categories");
const categoriesNumber = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
});
