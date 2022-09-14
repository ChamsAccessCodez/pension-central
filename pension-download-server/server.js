const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

// download endpoint
app.get("/", function (req, res) {
  res.download("./HR-schedule-template.xlsx");
});

// run the server
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
