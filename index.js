const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// all chef data
const allchefjson = require("./jsonData/chefInfo.json");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/allchef", (req, res) => {
  res.send(allchefjson);
});

app.listen(port, () => {
  console.log(`FuudVerse server listening on port ${port}`);
});
