const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const formControllers = require("./controllers/formcontrollers");
const ticketControllers = require("./controllers/ticketControllers");
const trainControllers = require("./controllers/trainControllers");
const trainsTicketsClientsControllers = require("./controllers/trainTicketControllers");
const categoryControllers = require("./controllers/categoryControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/ticket", ticketControllers.browse);
router.get("/ticket/:id", ticketControllers.read);
router.get("/train", trainControllers.browse);
router.get("/train/:id", trainControllers.read);
router.get("/trainsTicketsClients", trainsTicketsClientsControllers.getAll);

router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const clientControllers = require("./controllers/clientControllers");

router.get("/clients", clientControllers.browse);
router.get("/clients/:id", clientControllers.read);
router.put("/clients/:id", clientControllers.edit);
router.post("/clients", clientControllers.add);
router.delete("/clients/:id", clientControllers.destroy);
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

/** ***************************************** */

router.get("/categories/:id", categoryControllers.read);

module.exports = router;
