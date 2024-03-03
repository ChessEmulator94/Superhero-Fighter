/*
 * View possible Superhero IDs @ https://superheroapi.com/ids.html
 */

// Set to your access token from superheroapi.com
const ACCESS_TOKEN = 7150306591723520;
// Base URL for all API requests
const BASE_URL = `https://superheroapi.com/api/` + ACCESS_TOKEN;

// Gets Superhero data based on provided ID
function getHeroData(targetHeroID) {
  let fetchURL = `${BASE_URL}/${targetHeroID}`;
  return fetch(fetchURL)
    .then((response) => response.json())
    .then((heroData) => {
      let summaryJSON = {
        id: heroData.id,
        name: heroData.name,
        powerstats: heroData.powerstats,
        image: heroData.image,
      };
      return summaryJSON;
    })
    .catch((error) => {
      console.error("Error fetching hero data:", error);
      throw error;
    });
}

// Function used for testing
async function main() {
  let tempData = await getHeroData(5);
  console.log(tempData);
}

export default getHeroData;
