const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "public");
const dataRoute = require("./routes/dataRoute");

app.use(express.static(publicPath));

app.use("/api", dataRoute);

app.listen(port, () => {
  console.log("Server is up: ", `localhost:${port}`);
});
