/*
 * This is functionality for a mock database used for testing
 * the application during development
 */

// Use file system
const fs = require("fs");

// Read data from the db
const readDatabase = (dbName = "defaultDB.json") => {
  const data = fs.readFileSync(dbName, "utf-8");
  return JSON.parse(data);
};

// Append an existing db
const appendDatabase = (data, dbName = "defaultDB.json") => {
  if (!data) {
    return console.log("Provide data to write");
  }
  // Reading items from the file system
  const jsonData = fs.readFileSync(dbName)
  const dbItems = JSON.parse(jsonData)

  // Add new item to the item list
  dbItems.push(data)

  const newJsonString = JSON.stringify(dbItems)
  writeDatabase(dbItems,dbName);
};

// Write data to a new db
const writeDatabase = (data, dbName = "defaultDB.json") => {
  if (!data) {
    return console.log("Provide data to write");
  }
  try {
    fs.writeFileSync(dbName, JSON.stringify(data));
    console.log("Write successful");
  } catch (err) {
    return console.log(`Error while writing data:\n${err}`);
  }
};

module.exports = { writeDatabase, readDatabase, appendDatabase };

