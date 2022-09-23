const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword } = require("./auth");

const formControllers = require("./controllers/formcontrollers");
const ticketControllers = require("./controllers/ticketControllers");
const trainControllers = require("./controllers/trainControllers");
const trainsTicketsClientsControllers = require("./controllers/trainTicketControllers");
const categoryControllers = require("./controllers/categoryControllers");
const productControllers = require("./controllers/productControllers");
const clientControllers = require("./controllers/clientControllers");

// ********* PUBLIC ROUTES ********
router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.get("/categories/:id", categoryControllers.read);
router.get("/productsdetails", productControllers.readProductsDetails);
// get shoplist

// ******** LOGIN ROUTE ********
router.post(
  "/login",
  clientControllers.getClientByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// router.use(verifyToken);
// ******** HIDDEN ROUTES ********

// *** TRAIN / TICKET ***
router.get("/ticket", ticketControllers.browse);
router.get("/ticket/:id", ticketControllers.read);

router.get("/train", trainControllers.browse);
router.get("/train/:id", trainControllers.read);

router.get("/trainsTicketsClients", trainsTicketsClientsControllers.getAll);
// *** CLIENTS ***
router.get("/clients", clientControllers.browse);
router.get("/clients/:id", clientControllers.read);
router.put("/clients/:id", clientControllers.edit);
router.post("/clients", hashPassword, clientControllers.add);
router.delete("/clients/:id", clientControllers.destroy);
// *** FORM ***
router.get("/forms", formControllers.getAll);
router.get("/forms/:id", formControllers.getById);
router.post("/forms", formControllers.add);
// *** SHOPLIST ***

// -----------------------------------------------------------------

// ICI IL VA FALLOIR PROTEGER AUTREMENT QUAVEC LE TOKEN CAR ADMIN UNIQUEMENT !!
// *** PRODUCTS ***
router.put("/products/:id", productControllers.edit);
router.post("/products", productControllers.add);
router.delete("/products/:id", productControllers.destroy);

module.exports = router;
