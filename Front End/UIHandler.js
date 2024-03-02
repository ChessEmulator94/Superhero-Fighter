const viewBtn = document.querySelector("#viewBtn");
const addBtn = document.querySelector("#addBtn");
const delBtn = document.querySelector("#delBtn");
const updateBtn = document.querySelector("#updateBtn");

// Retrieves all heroes and their data from the HeroDB database
viewBtn.addEventListener("click", () => {
  // Function declaration in UserInterfaceAPIs.js
  viewAllHeroes(); 
});

// Add a hero to the HeroDB database
addBtn.addEventListener("click", () => {
  // Function declaration in UserInterfaceAPIs.js
  addHero();
});

// Delete a hero from the HeroDB database
delBtn.addEventListener("click", () => {
  console.log(deleteHero());
  // window.location.href = "index.html";
});

// Update an entry in the HeroDB database
updateBtn.addEventListener("click", () => {
  console.log(updateHero());
  // window.location.href = "index.html";
});
