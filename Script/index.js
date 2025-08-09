// load categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
// load all pets
const loadPets = ()=>{
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
  .then((res)=>res.json())
  .then((data)=> displayPets(data.pets))
  .catch((err)=> console.log(err))
}
//display pets

const displayPets= (pets)=>{
  const petsContainer = document.getElementById('pets');
  pets.forEach((pet)=>{
    const div = document.createElement('div');
    div.classList = "card bg-base-100 border-2 p-4";
    div.innerHTML = `
<figure>
    <img class="w-full h-full object-cover" src="${pet.image}" />
  </figure>
      <h3 class="text-lg font-bold mt-5">${pet.pet_name}</h3>

      <div class="flex gap-3 items-center">
      <img class="h-5 w-5" src="images/breed.png"}/>
      <p class="text-sm text-gray-500">${pet.breed}</p>
      </div>

      <div class="flex gap-3 items-center">
      <img class="h-5 w-5" src="images/birth.png"}/>
      <p class="text-sm text-gray-500">${pet.date_of_birth}</p>
      </div>

      <div class="flex gap-3 items-center">
      <img class="h-5 w-5" src="images/gender.png"}/>
      <p class="text-sm text-gray-500">${pet.gender}</p>
      </div>

      <div class="flex gap-3 items-center">
      <img class="h-5 w-5" src="images/price.png"}/>
      <p class="text-sm text-gray-500">${pet.price}</p>
      </div><br> <hr>

      <div class="mt-5 flex justify-around">
      <button class="btn"><img class="size-5" src="images/like.png"/></button>
      <button class=" btn btn-success text-sm text-white ">Adopt</button>
      <button class=" btn btn-success text-sm text-white ">Details</button>
      </div>

    `
    petsContainer.appendChild(div)
    
  })
}
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
loadPets();