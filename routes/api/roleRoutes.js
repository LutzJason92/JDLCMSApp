const router = require("express").Router();
const Role = require("../../models/Role");

// GET a role .get
router.get("/:id", async (req, res) => {
  try {
    const roleData = await Role.findByPk(req.params.id);
    if (!roleData) {
      res.status(404).json({ message: "No ROLE with this id!" });
      return;
    }
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a role .put

// DELETE a role .destroy

// CREATE a new Role
router.post("/", async (req, res) => {
  try {
    const newRole = req.body;
    const roleData = await Role.create(newRole);
    res.status(200).json(roleData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
