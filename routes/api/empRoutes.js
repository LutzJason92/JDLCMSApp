const router = require("express").Router();
const Emps = require("../../models/Emps");

// GET all employees
router.get("/", async (req, res) => {
  try {
    const empData = await Emps.findAll();
    if (!empData) {
      res.status(404).json({ message: "No EMPLOYEE with this id!" });
      return;
    }
    res.status(200).json(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a employee .get
router.get("/:id", async (req, res) => {
  try {
    const empData = await Emps.findByPk(req.params.id);
    if (!empData) {
      res.status(404).json({ message: "No EMPLOYEE with this id!" });
      return;
    }
    res.status(200).json(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a employee .put

// DELETE a employee .destroy

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
