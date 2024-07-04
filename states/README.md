### README Content for `/states` Directory

# States Data Directory

Welcome to the States Data Directory. This directory contains comprehensive information about various states in the United States, including their capitals and ZIP code ranges.

## File Information

### `states.json`

This JSON file contains a list of states with the following details:

- **State**: The name of the state.
- **Capital**: The capital city of the state.
- **ZIP Range**: The range of ZIP codes associated with the state.

#### Example Entry

```
{
  "state": "California",
  "capital": "Sacramento",
  "zip": "90001 to 96162"
}
```

### Purpose

This data can be used for various purposes, including:

- Educational projects
- Geographical analysis
- Application development that requires state-related information

### How to Use

You can easily parse this JSON data in your application. Here’s an example of how you can read and use this data in Node.js:

```javascript
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "states.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    const states = JSON.parse(data);
    console.log(states);
  } catch (err) {
    console.error("Error parsing JSON data:", err);
  }
});
```

### Included script

The included `script.js` is to be used if you wish to remove specific keys from the data, refer to it for any modification, it's well documented as well.

### Contribution

If you have any updates or corrections to this data, feel free to fork the repository and submit a pull request. We welcome contributions from the community.

### License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.

---
