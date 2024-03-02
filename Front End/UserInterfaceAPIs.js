// Set equal to the URL server is running on
const SERVER_URL = `http://localhost:5500`

// Query the node.js server @queryURL with a GET
// Functionality @ app.get("/viewheroes" ...) in index.js
const viewAllHeroes = () => {
  let queryURL = `${SERVER_URL}/viewheroes`;
  fetch(queryURL, {})
     .then(response => response.text())
     .then(text => {
      console.log(JSON.stringify(text)); 
      return text
    })
};

// Query the node.js server @queryURL with a POST
// Functionality @ app.use("/addhero" ...) in index.js
async function addHero(){  

  let queryURL = `${SERVER_URL}/addhero`;
  let urlBody =  JSON.stringify({ "name": "Sherlock Gnomes", "age":"222" });

  fetch(queryURL, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
    },
     body: urlBody
   }).then(response => response.text).then(text => {return text});
};

// Query the node.js server @queryURL with a DELETE
const deleteHero = () => {
  // Function
  let responseMsg = "Hero Deleted Successfully";
  return responseMsg;
};

const updateHero = () => {
  // Function
  let responseMsg = "Hero Updated Successfully";
  return responseMsg;
};
