const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.post("/save", (req, res) => {
  console.log("Received data:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  const dataToSave = { [email]: password };

  fs.readFile("dataforsongsphere.json", (err, data) => {
    if (err) {
      return res.status(500).send("Failed to read data file.");
    }

    let json = JSON.parse(data);
    if (json.some((obj) => obj.hasOwnProperty(email))) {
      return res.json({
        message: "This email is already registered on this website.",
      });
    } else {
      json.push(dataToSave);
    }

    fs.writeFile(
      "dataforsongsphere.json",
      JSON.stringify(json, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Failed to write data.");
        }
        res.json({ message: "Data saved successfully." });
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
