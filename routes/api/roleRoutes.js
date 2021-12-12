const router = require("express").Router();
const Role = require("../../models/Role");

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
