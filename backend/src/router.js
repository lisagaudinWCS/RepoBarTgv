const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const formControllers = require("./controllers/formControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/forms", formControllers.getAll);
router.get("/forms/:id", formControllers.getById);
router.post("/forms", formControllers.add);

module.exports = router;
