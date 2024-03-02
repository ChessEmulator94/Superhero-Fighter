import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5500;

app.use(bodyParser.json());
app.use(express.json());

// Enables CORS for ALL routes
app.use(cors());

// Import db handlers
import {
  writeDatabase,
  readDatabase,
  appendDatabase,
} from "./../Database/MockDatabaseHandler.cjs";

import getHeroData from "./../REST Logic/HeroApiHandler.js";
// console.log(await getHeroData(7))

// Process GET request from http://localhost:${PORT}/viewheroes
app.get("/viewheroes", (req, res) => {
  let fullData = readDatabase("./../Database/HeroDB.json");
  //console.log(fullData);
  res.send(fullData);
});

// Process POST request from http://localhost:${PORT}/addhero
app.post("/addhero/:heroID", (req, res) => {
  let heroID = req.params.heroID;

  getHeroData(heroID)
    .then((postData) => {
      //console.log(postData);
      appendDatabase(postData, "./../Database/HeroDB.json");
      console.log("Post processed!");
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors here
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
