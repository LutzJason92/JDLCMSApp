const router = require("express").Router();

const empRoutes = require("./empRoutes");

router.use("/emps", empRoutes);

module.exports = router;
