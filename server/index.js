const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Producto 1",
    },
    {
      id: 2,
      name: "Producto 2",
    },
  ]);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(5000, () => console.log("Server is running"));
