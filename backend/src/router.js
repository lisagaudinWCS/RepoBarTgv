const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const formControllers = require("./controllers/formcontrollers");
const ticketControllers = require("./controllers/ticketControllers");
const trainControllers = require("./controllers/trainControllers");
const trainsTicketsClientsControllers = require("./controllers/trainTicketControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/ticket", ticketControllers.browse);
router.get("/ticket/:id", ticketControllers.read);
router.get("/train", trainControllers.browse);
router.get("/train/:id", trainControllers.read);
router.get("/trainsTicketsClients", trainsTicketsClientsControllers.getAll);
// router.get("/trainsTicketsClients/:id", trainsTicketsClientsControllers.getById);

router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/forms", formControllers.getAll);
router.get("/forms/:id", formControllers.getById);
router.post("/forms", formControllers.add);
/** ***************************route products******* */
const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.put("/products/:id", productControllers.edit);
router.post("/products", productControllers.add);
router.delete("/products/:id", productControllers.destroy);
router.get("/products-details", productControllers.readProductsDetails);

module.exports = router;
