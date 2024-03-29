import bodyParser from "body-parser";
import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = 5500;

app.use(bodyParser.json());
app.use(express.json());

// Enables CORS for ALL routes (not safe)
app.use(cors());

// Import DB handlers
import {
  writeDatabase,
  readDatabase,
  appendDatabase,
  deleteItem,
  updateItem,
} from "./../Database/MockDatabaseHandler.cjs";

// Import function to get data from superheroapi.com
import getHeroData from "./../REST Logic/HeroApiHandler.js";

// Process GET request from http://localhost:${PORT}/viewheroes
app.get("/viewheroes", (req, res) => {
  let fullData = readDatabase("./../Database/HeroDB.json");
  res.send(fullData);
});

// Process POST request from http://localhost:${PORT}/
app.post("/heroes/:heroID", (req, res) => {
  let heroID = req.params.heroID;
  getHeroData(heroID)
    .then((postData) => {
      appendDatabase(postData, "./../Database/HeroDB.json");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Process DELETE request from http://localhost:${PORT}/
app.delete("/heroes/:heroID", (req, res) => {
  let heroID = req.params.heroID;
  deleteItem(heroID, "./../Database/HeroDB.json");
});

app.patch("/heroes/:heroID", (req, res) => {
  let heroID = req.params.heroID;
  let jsonBody = req.body;
  console.log(jsonBody);
  //res.send(console.log("Handled"));
  updateItem(heroID, jsonBody, "./../Database/HeroDB.json");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
