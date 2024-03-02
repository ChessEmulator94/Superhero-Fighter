const idValue = document.querySelector(".value.id");
const nameValue = document.querySelector(".value.name");
const intelligenceValue = document.querySelector(".value.intelligence");
const strengthValue = document.querySelector(".value.strength");
const speedValue = document.querySelector(".value.speed");
const durabilityValue = document.querySelector(".value.durability");
const powerValue = document.querySelector(".value.power");
const combatValue = document.querySelector(".value.combat");
const heroImage = document.querySelector(".profile-picture");

const backBtn = document.querySelector(".back-button");
const nextBtn = document.querySelector(".next-button");

// Current hero in the heroDataArray array being displayed
let currentIndex = 0;
// Last hero in the heroDataArray array
let maxIndex = 0;
// Contains all hero jsons
let heroDataArray;

// On window load, creates array of all heros and updates current display
document.addEventListener("DOMContentLoaded", function () {
  viewAllHeroes().then((allHeroes) => {
    heroDataArray = jsonifyString(allHeroes);
    maxIndex = heroDataArray.length;
    updateDisplayedHero(0);
  });
});

nextBtn.addEventListener("click", () => {
  updateDisplayedHero(1);
});

backBtn.addEventListener("click", () => {
  updateDisplayedHero(-1);
});

const updateDisplayedHero = (direction) => {
  adjustIndex(direction);
  let currentHero = heroDataArray[currentIndex];

  idValue.textContent = currentHero.id;
  nameValue.textContent = currentHero.name;
  intelligenceValue.textContent = currentHero.powerstats.intelligence;
  strengthValue.textContent = currentHero.powerstats.strength;
  speedValue.textContent = currentHero.powerstats.speed;
  durabilityValue.textContent = currentHero.powerstats.durability;
  powerValue.textContent = currentHero.powerstats.power;
  combatValue.textContent = currentHero.powerstats.combat;
  heroImage.src = currentHero.image.url;
};

// Adjust the index based on direction (1 for next, -1 for back)
const adjustIndex = (direction) => {
  if (direction === -1) {
    // If going back and not at the beginning, decrement index, else set to the last item
    if (currentIndex != 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex - 1;
    }
  } else if (direction === 1) {
    // If going forward and not at the end, increment index, else set to the first item
    if (currentIndex != maxIndex - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }
};

// Turns an array in string form into an actual array
const jsonifyString = (arrayAsString) => {
  arrayAsString = arrayAsString.replace("[", "").replace("]", "");
  let actualArray = JSON.parse("[" + arrayAsString + "]");
  return actualArray;
};
