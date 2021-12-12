const router = require("express").Router();
const Dep = require("../../models/Dep");

// GET a department .get
router.get("/:id", async (req, res) => {
  try {
    const depData = await Dep.findByPk(req.params.id);
    if (!depData) {
      res.status(404).json({ message: "No DEPARTMENT with this id!" });
      return;
    }
    res.status(200).json(depData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a department .put

// DELETE a department .destroy

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
