const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.post("/save", (req, res) => {
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

app.post("/check", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  fs.readFile("dataforsongsphere.json", (err, data) => {
    if (err) {
      return res.status(500).send("Failed to read data file.");
    }

    let json = JSON.parse(data);
    let user = json.find((user) => user.hasOwnProperty(email));
    if (user) {
      if (user[email] === password) {
        return res.json({ message: "Successfully entered" });
      } else {
        return res.json({ message: "Incorrect Password" });
      }
    } else {
      return res.json({ message: "Incorrect E-mail address" });
    }
  });
});

app.post("/comment", (req, res) => {
  const entries = Object.entries(req.body);

  if (entries.length === 0) {
    return res.status(400).json({ error: "No data received" });
  }

  const [name, comment] = entries[0];

  if (!name || !comment) {
    return res.status(400).json({ error: "Invalid data received" });
  }

  fs.readFile("comments.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Failed to read data file.");
    }

    let json;
    try {
      json = JSON.parse(data);
    } catch (parseError) {
      return res.status(500).send("Invalid JSON data.");
    }

    if (name in json) {
      json[name].push(comment);
    } else {
      json[name] = [comment];
    }

    fs.writeFile("comments.json", JSON.stringify(json, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Failed to write data.");
      }
      res.json(json[name]);
    });
  });
});

app.post("/getcomment", (req, res) => {
  const { name } = req.body; 

  if (!name) {
    return res.status(400).send("Name parameter is required.");
  }

  fs.readFile("comments.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Failed to read data file.");
    }

    let json;
    try {
      json = JSON.parse(data);
    } catch (parseError) {
      return res.status(500).send("Invalid JSON data.");
    }

    const comment = json[name];
    if (!comment) {
      return res.status(404).send("Comment not found.");
    }

    res.json(comment);
  });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
