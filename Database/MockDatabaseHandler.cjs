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
  const jsonData = fs.readFileSync(dbName);
  const dbItems = JSON.parse(jsonData);

  // Add new item to the item list
  dbItems.push(data);

  const newJsonString = JSON.stringify(dbItems);
  writeDatabase(dbItems, dbName);
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

// Delete an item from the database
const deleteItem = (identifier, dbName = "defaultDB.json") => {
  // Read existing data from the database
  const jsonData = fs.readFileSync(dbName);
  const dbItems = JSON.parse(jsonData);

  // Find the index of the item with the given identifier
  const index = dbItems.findIndex((item) => item.id === identifier);

  // If the item is found, remove it from the array
  if (index !== -1) {
    dbItems.splice(index, 1);
    writeDatabase(dbItems, dbName);
    console.log("Item deleted successfully");
  } else {
    console.log("Item not found");
  }
};

// Update an item in the database
const updateItem = (identifier, updates, dbName = "defaultDB.json") => {
  // Read existing data from the database
  const jsonData = fs.readFileSync(dbName);
  const dbItems = JSON.parse(jsonData);

  // Find the index of the item with the given identifier
  const index = dbItems.findIndex((item) => item.id === identifier);

  // If the item is found, update its properties with the provided updates
  if (index !== -1) {
    const updatedItem = { ...dbItems[index], ...updates };
    dbItems[index] = updatedItem;
    writeDatabase(dbItems, dbName);
    console.log("Item updated successfully");
  } else {
    console.log("Item not found");
  }
};

// Export DB functions
module.exports = {
  writeDatabase,
  readDatabase,
  appendDatabase,
  deleteItem,
  updateItem,
};
