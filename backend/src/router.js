const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const clientControllers = require("./controllers/clientControllers");

router.get("/clients", clientControllers.browse);
router.get("/clients/:id", clientControllers.read);
router.put("/clients/:id", clientControllers.edit);
router.post("/clients", clientControllers.add);
router.delete("/clients/:id", clientControllers.destroy);

module.exports = router;
