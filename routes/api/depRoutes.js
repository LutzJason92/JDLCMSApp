const router = require("express").Router();
const Dep = require("../../models/Dep");

// CREATE a new Dep
router.post("/", async (req, res) => {
  try {
    const newDep = req.body;
    const depData = await Dep.create(newDep);
    res.status(200).json(depData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
