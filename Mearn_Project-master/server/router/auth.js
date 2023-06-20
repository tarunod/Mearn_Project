const expres = require("express");
const router = expres.Router();

require("../db/conn");
const user = require("../model/userSchema");
const Userr = require("../model/userSchema");

router.get("/", function (req, res) {
  res.send("Hello from HOME applicati  on URL");
});

router.get("/about", function (req, res) {
  res.send("Hello from the ABOUT application URL with a ");
});

router.get("/contact", async function (req, res) {
  res.send("Hello from the 'CONTACT URL");
});

router.post("/register", async function (req, res) {
  // res.send("Hello from the 'signin URL with a  request");

  const { name, mobile, email, work, password, cpassword } = req.body;
  if (!name || !mobile || !email || !work || !password || !cpassword) {
    return res.status(422).json({ error: "pls fille all the fields" });
  }

  try {
    const isuseexist = await Userr.findOne({ email: email });

    if (isuseexist) {
      return res.json({ error: "email alreade exissst" });
    }

    const user = new Userr({
      name,
      mobile,
      email,
      work,
      password,
      cpassword,
    });

    const userregisterd = await user.save();
    res.status(201).json({ msg: "stored" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/signup", function (req, res) {
  res.send("Hello from the 'signUP URL with a  request");
});

module.exports = router;
