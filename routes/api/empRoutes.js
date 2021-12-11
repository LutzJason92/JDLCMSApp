const router = require("express").Router();
const User = require("../../models/User");

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const newEmp = req.body;
    const empData = await User.create(newEmp);
    res.status(200).json(empData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
