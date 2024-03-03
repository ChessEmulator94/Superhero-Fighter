/*
 * Script for homepage of application
 */

// Get button elements from DOM
const fightBtn = document.querySelector("#fight");
const manageHeroBtn = document.querySelector("#manage-heroes");

// Change window to `fight.html`
fightBtn.addEventListener("click", () => {
  // btn functionality goes here
});

// Change window to `manage.html`
manageHeroBtn.addEventListener("click", () => {
  window.location.href = "./Manage Heroes/manage.html";
});
