const mongoose = require("mongoose");

const userSc = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  mobile: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  work: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
});

// userSc.pre("save", async function (next) {
//   console.log("hi from inside");
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }

//   next();
// });

const Userr = mongoose.model("USERS", userSc);

module.exports = Userr;
