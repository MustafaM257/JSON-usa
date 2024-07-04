const fs = require("fs");
const path = require("path");

// Function to remove specified keys from an array of objects
function removeKeys(data, keys) {
  return data.map((item) => {
    keys.forEach((key) => delete item[key]);
    return item;
  });
}

// Keys to be removed
const keysToRemove = [
  /* Include Keys you wish to remove from the data.json */
];

// Read the JSON file
const filePath = path.join(__dirname, "data.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    const states = JSON.parse(data);

    // Remove specified keys from the data
    const modifiedStates = removeKeys(states, keysToRemove);

    // Write the modified data back to a new JSON file
    const outputFilePath = path.join(__dirname, "updated_states_data.json"); // Output file name
    fs.writeFile(
      outputFilePath,
      JSON.stringify(modifiedStates, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing the file:", err);
          return;
        }
        console.log("Modified data saved to", outputFilePath);
      }
    );
  } catch (err) {
    console.error("Error parsing JSON data:", err);
  }
});
