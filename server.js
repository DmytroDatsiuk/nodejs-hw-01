const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

const app = require("./app");
//* g9X$J5M5C.Ry6Bx

mongoose
  .connect(DB_HOST)
  .then(app.listen(3000))
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
