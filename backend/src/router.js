const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const ticketControllers = require("./controllers/ticketControllers");
const trainControllers = require("./controllers/trainControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/ticket", ticketControllers.browse);
router.get("/ticket/:id", ticketControllers.read);
router.get("/train", trainControllers.browse);
router.get("/train/:id", trainControllers.read);

router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
