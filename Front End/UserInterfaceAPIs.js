// Set equal to the URL server is running on
const SERVER_URL = `http://localhost:5500`;

// Query the node.js server @queryURL with a GET
// Functionality @ app.get("/viewheroes" ...) in index.js
const viewAllHeroes = () => {
  let queryURL = `${SERVER_URL}/viewheroes`;
  return fetch(queryURL, {})
    .then((response) => response.text())
    .then((text) => {
      //console.log(JSON.stringify(text));
      return text;
    });
};

// Query the node.js server @queryURL with a POST
// Functionality @ app.use() in index.js
async function addHero(heroID = 1) {
  let queryURL = `${SERVER_URL}/${heroID}`;
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

// Query the node.js server @queryURL with a DELETE
// Functionality @ app.delete() in index.js
const deleteHero = async (heroID) => {
  try {
    let queryURL = `${SERVER_URL}/${heroID}`;
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

const updateHero = () => {
  // Function
  let responseMsg = "Hero Updated Successfully";
  return responseMsg;
};
