/*
 * Provides the script for `manage.html`
 * Exclusively handles the UI and events from UI actions
 */

// Get button references from the DOM
const viewBtn = document.querySelector("#viewBtn");
const addBtn = document.querySelector("#addBtn");
const delBtn = document.querySelector("#delBtn");
const updateBtn = document.querySelector("#updateBtn");

// Retrieves all heroes and their data from the HeroDB database
viewBtn.addEventListener("click", () => {
  // Function declaration in UserInterfaceAPIs.js
  window.location.href = "ViewHeroes.html";
});

// Add a hero to the HeroDB database
addBtn.addEventListener("click", () => {
  // Function declaration in UserInterfaceAPIs.js
  popupWindow("Add", addHero);
});

// Delete a hero from the HeroDB database
delBtn.addEventListener("click", () => {
  // deleteHero() decleration in UserInterfaceAPIs.js
  popupWindow("Delete", deleteHero);
});

// Update an entry in the HeroDB database
updateBtn.addEventListener("click", () => {
  // updateHero() decleration in UserInterfaceAPIs.js
  popupWindow("Update", updateHero);
});

// Pop up window to get the id of the hero for the update, delete or add
const popupWindow = (action, callbackFunction) => {
  let heroID = prompt(`Enter ID for the hero you wish to ${action}:`);
  if (heroID !== null && heroID !== "") {
    // Call the function passed
    callbackFunction(heroID);
    alert(`${action} request was processed`);
  }
};
