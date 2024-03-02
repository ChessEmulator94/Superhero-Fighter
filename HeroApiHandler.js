/* View possible Superhero IDs @ https://superheroapi.com/ids.html */


// Set to your access token from superheroapi.com
const ACCESS_TOKEN = 7150306591723520;
// Base URL for all API requests
const BASE_URL = `https://superheroapi.com/api/` + ACCESS_TOKEN;

// Placeholder for DB (add later)
let allHeros = [];

// Add data to the superhero database
function addHeroToDatabase(heroData) {
  allHeros.push(JSON.stringify(heroData));
  console.log(`Hero with ID ${heroData.id} and name ${heroData.name} added.`);
}

// Gets Superhero data based on provided ID
function getHeroData(targetHeroID) {
  let fetchURL = `${BASE_URL}/${targetHeroID}`;
  
  return fetch(fetchURL)
    .then((response) => response.json())
    .then((heroData) => {
      //addHeroToDatabase(heroData);
      return heroData;
    })
    .catch((error) => {
      console.error("Error fetching hero data:", error);
      throw error;
    });
}

 
async function main() {
  let tempData = await getHeroData(5);
  console.log(tempData);
}

//main();

export default getHeroData;