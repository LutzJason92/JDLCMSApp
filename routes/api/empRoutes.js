const router = require("express").Router();
const Emps = require("../../models/Emps");

// CREATE a new Emps
router.post("/", async (req, res) => {
  try {
    const newEmp = req.body;
    const empData = await Emps.create(newEmp);
    res.status(200).json(empData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
