const mongoose = require("mongoose");
const DB =
  "mongodb+srv://tarunod:tarunbeldar@userss.xi5891d.mongodb.net/reactdata?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("coonection successss");
  })
  .catch((errr) => console.log(errr));
