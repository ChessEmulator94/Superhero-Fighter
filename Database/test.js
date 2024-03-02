// Used to test MockDatabaseHandler.js


const {
  writeDatabase,
  readDatabase,
  appendDatabase,
} = require("./MockDatabaseHandler.js");

const main = () => {
  //let tempStr = '"Name": "Nigel", "Age": "7"';
  //writeDatabase(tempStr, "HeroDB.json");
  //appendDatabase("HELLO PEOPLE OF MIDDLE EARTH", "HeroDB.json");
  console.log(readDatabase("HeroDB.json"));
};

main();
