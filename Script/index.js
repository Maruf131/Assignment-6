// load categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
// display categories
const displayCategories = (data) => {
  const categoryContainer = document.getElementById("categories");
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
         <button class="btn w-full ">
         <div class="flex gap-4">
            <img class="size-7" src="${item.category_icon}"/>
            <h1 class="text-lg font-bold">${item.category}</h1>
            </div>
         </button>
            
        `;
    categoryContainer.appendChild(div);
  });
};
loadCategories();
