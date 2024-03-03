/*
 * Acts as an intermediary between the UI and the server
 *
 * Functions defined in this class are called in UIHandler.js, and
 * make various queries to the server as defined in ./../REST Logic/index.json
 *
 */

// Set equal to the URL server is running on (get from ./../REST Logic/index.json)
const SERVER_URL = `http://localhost:5500`;

// Query the server @queryURL with a GET
const viewAllHeroes = () => {
  let queryURL = `${SERVER_URL}/viewheroes`;
  return fetch(queryURL, {})
    .then((response) => response.text())
    .then((text) => {
      return text;
    });
};

// Query the server @queryURL with a POST
async function addHero(heroID = 1) {
  let queryURL = `${SERVER_URL}/heroes/${heroID}`;
  fetch(queryURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text)
    .then((text) => {
      return text;
    });
}

// Query the server @queryURL with a DELETE
const deleteHero = async (heroID) => {
  try {
    let queryURL = `${SERVER_URL}/heroes/${heroID}`;
    const response = await fetch(queryURL, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete hero");
    }
  } catch (error) {
    console.error("Error deleting hero:", error);
  }
};

// Update the hero with new data
const updateHero = async (heroID, newData) => {
  try {
    console.log(newData);

    // TODO: change the way newData is passed to JSON, remove next line
    newData = JSON.parse('{"' + newData.replace(/:/, '":"') + '"}');
    console.log(newData);

    let queryURL = `${SERVER_URL}/heroes/${heroID}`;
    const response = await fetch(queryURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      // TODO: after newData is JSON, remove JSON.stringify
      body: JSON.stringify(newData), //'{"name":"Gadi"}',
    });
    if (!response.ok) {
      throw new Error("Failed to update hero");
    }
  } catch (error) {
    console.error("Error updating hero:", error);
  }
};
