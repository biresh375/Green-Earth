// console.log("file connected");

const removeActive = () => {
  const allactiveClass = document.querySelectorAll(".active");
  allactiveClass.forEach((btn) => btn.classList.remove("active"));
};

const allPlantsLoad = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlants(json.plants));
};

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((category) => displayCategories(category.categories));
};
const loadCategoryByPlants = (id) => {
    // console.log(id);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((categoryPlants) =>{
        removeActive();
        const activeBtn = document.getElementById(`categoryBtn-${id}`)
        activeBtn.classList.add("active")
        displayCategoryByPlants(categoryPlants.plants);
    });
};

// "id": 4,
// "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
// "name": "Gulmohar",
// "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
// "category": "Flowering Tree",
// "price": 400
const displayCategoryByPlants =(categoryByPlants)=>{
     const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  for(const categoryByPlant of categoryByPlants){
     const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
        <div class="card p-4 bg-white space-y-3 ">
              <img class="h-80 rounded-md" src="${categoryByPlant.image}" alt="">
              <h1 class="text-xl font-bold">${categoryByPlant.name}</h1>
              <p class="text-[#1F2937]">${categoryByPlant.description}</p>
              <div class="flex justify-between items-center">
                <span class="border-none btn text-[#15803D] rounded-full bg-[#DCFCE7]">${categoryByPlant.category}</span>
                <p class="font-bold">৳${categoryByPlant.price}</p>
              </div>
              <button class="border-none py-3 cursor-pointer text-[#fff] rounded-full  bg-[#15803D] text-2xl">Add to Cart</button>
            </div>
        
        
        `;
    plantsContainer.append(categoryCard)
  }

}
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categoryContainer");
  categoryContainer.innerHTML = "";

  for (const category of categories) {
    const categoryName = document.createElement("div");
    categoryName.innerHTML = `
             <div id="categoryBtn-${category.id}" onclick=loadCategoryByPlants(${category.id})
              class="hover:text-white hover:bg-[#1ec15a] rounded-md text-nowrap py-2 px-6"
            >
              <h1 class="font-semibold">${category.category_name}</h1>
            </div>
        `;
    categoryContainer.append(categoryName);
  }
};

const displayPlants = (plants) => {
  const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  //   const
  for (const plant of plants) {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card p-4 bg-white space-y-3 ">
              <img class="h-80 rounded-md" src="${plant.image}" alt="">
              <h1 class="text-xl font-bold">${plant.name}</h1>
              <p class="text-[#1F2937]">${plant.description}</p>
              <div class="flex justify-between items-center">
                <span class="border-none btn text-[#15803D] rounded-full bg-[#DCFCE7]">${plant.category}</span>
                <p class="font-bold">৳${plant.price}</p>
              </div>
              <button class="border-none py-3 cursor-pointer text-[#fff] rounded-full  bg-[#15803D] text-2xl">Add to Cart</button>
            </div>
        
        
        `;
    plantsContainer.append(card);
  }
};
loadCategory();
allPlantsLoad();
