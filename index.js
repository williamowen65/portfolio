const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  express.static(
    path.join(__dirname, "dist")
  )
);

app.use(
  express.static(
    path.join(__dirname, "src/assets")
  )
);

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
