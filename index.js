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
// route to serve all chef data
app.get("/allchef", (req, res) => {
  res.send(allchefjson);
});
// route to serve specific chef data
app.get("/allchef/:id", (req, res) => {
  let reqparams = req.params;
  let requested_chef = allchefjson.find(
    (chef) => chef.id === parseInt(reqparams.id)
  );
  res.send(requested_chef);
});

app.listen(port, () => {
  console.log(`FuudVerse server listening on port ${port}`);
});
