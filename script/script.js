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
    .then((categoryPlants) => {
      removeActive();
      const activeBtn = document.getElementById(`categoryBtn-${id}`);
      activeBtn.classList.add("active");
      displayCategoryByPlants(categoryPlants.plants);
    });
};

const loadPlantDetail = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((plantDetails) => {
      displayDetailsModal(plantDetails.plants);
    });
};

const addToCard = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((Details) => {
      displayYourCard(Details.plants);
    });
};




const displayYourCard = (cardDetail) => {
  alert(`${cardDetail.name} add your card`)
  let totalPrice =Number(document.getElementById("totalPrice").innerText);
  const treePrice =Number(cardDetail.price)
   totalPrice =totalPrice+treePrice;
  // console.log(totalPrice);
  document.getElementById("totalPrice").innerText=totalPrice;
  
  const yourcard = document.getElementById("yourCardContainer");
  const newCard = document.createElement("div");
  newCard.innerHTML = `
              <div class="p-2 mb-2 bg-white w-full rounded-md flex justify-between gap-2">
                <div>
                  <h1 class="text-nowrap font-semibold text-xl">${cardDetail.name}</h1>
                  <p class="ml-5">৳<span>${cardDetail.price}</span></p>
                </div>
                <div><span class="remove">❌</span></div>
              </div>`;
    yourcard.append(newCard);

  };
  
  // console.log(totalPrice);
  const yourCardContainer=document.getElementById("yourCardContainer")
  yourCardContainer.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("remove")){
      alert("removed clicked");
      const parent = e.target.parentElement.parentElement
      // console.log(parent);
      const price =Number(parent.firstElementChild.lastElementChild.lastElementChild.innerText)

      let totalPrice =Number(document.getElementById("totalPrice").innerText)
      totalPrice = totalPrice-price;
      document.getElementById("totalPrice").innerText = totalPrice;

      parent.remove()
    }

  })




  // "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500

const displayDetailsModal = (details) => {
  // console.log(details);
  const modalContainer = document.getElementById("modalDetails");
  modalContainer.innerHTML = `
  <div class="space-y-4">
                <h1 class="font-bold text-2xl">${details.name}</h1>
                <img class=" h-78 w-120 rounded-lg " src=${details.image} alt="">
                <p><span  class="font-bold text-xl " >category: </span>${details.category}</p>
                <p><span  class="font-bold text-xl ">price: </span>৳${details.price}</p>
                <p><span  class="font-bold text-xl ">discription: </span>${details.description}</p>
              </div>
   
 
 `;

  document.getElementById("plantDetailsModal").showModal();
};
const displayCategoryByPlants = (categoryByPlants) => {
  const plantsContainer = document.getElementById("plants-container");
  plantsContainer.innerHTML = "";
  for (const categoryByPlant of categoryByPlants) {
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
        <div class="card p-4 bg-white space-y-3 ">
              <img class="h-80 rounded-md" src="${categoryByPlant.image}" alt="">
              <h1 onclick="loadPlantDetail(${categoryByPlant.id})" class="text-xl font-bold">${categoryByPlant.name}</h1>
              <p class="text-[#1F2937]">${categoryByPlant.description}</p>
              <div class="flex justify-between items-center">
                <span class="border-none btn text-[#15803D] rounded-full bg-[#DCFCE7]">${categoryByPlant.category}</span>
                <p class="font-bold">৳${categoryByPlant.price}</p>
              </div>
              <button onclick="addToCard(${categoryByPlant.id})" class="border-none py-3 cursor-pointer text-[#fff] rounded-full  bg-[#22cc60] hover:bg-[#0c4d24] text-2xl">Add to Cart</button>
            </div>
        
        
        `;
    plantsContainer.append(categoryCard);
  }
};
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
    // console.log(plant.id);
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card p-4 bg-white space-y-3 ">
              <img class="h-80 rounded-md" src="${plant.image}" alt="">
              <h1 onclick="loadPlantDetail(${plant.id})"  class="text-xl font-bold">${plant.name}</h1>
              <p class="text-[#1F2937]">${plant.description}</p>
              <div class="flex justify-between items-center">
                <span class="border-none btn text-[#15803D] rounded-full bg-[#DCFCE7]">${plant.category}</span>
                <p class="font-bold">৳${plant.price}</p>
              </div>
              <button onclick="addToCard(${plant.id})" class="border-none py-3 cursor-pointer text-[#fff] rounded-full   bg-[#22cc60] hover:bg-[#0c4d24] text-2xl">Add to Cart</button>
            </div>
        
        
        `;
    plantsContainer.append(card);
  }
};
loadCategory();
allPlantsLoad();
