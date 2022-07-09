const categoriesEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesEl.length);
const getItemInfo = () =>
  categoriesEl.forEach((category) => {
    const categoryEl = category.querySelector("h2").textContent;
    const elementsEl = category.querySelectorAll("li").length;
    console.log("Category:", categoryEl);
    console.log("Elements:", elementsEl);
  });
getItemInfo();
