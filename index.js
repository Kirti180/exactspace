const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const submittedJson = req.body.jsonData;
  try {
    const parsedJson = JSON.parse(submittedJson);
    console.log("Received JSON:", parsedJson);

    // Prepare response data with key-value pairs
    const responseData = {};
    for (const key in parsedJson) {
      if (parsedJson.hasOwnProperty(key)) {
        responseData[key] = parsedJson[key];
      }
    }

    res.json(responseData);
  } catch (error) {
    res.status(400).json({ error: "Invalid JSON data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
