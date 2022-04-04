//path pro jmeno slozky
const path = require("path");
//express pro webovou aplikaci
const express = require("express");

//nastaveni routeru jako express router
const router = express.Router();

//nastaveni controlleru
const controller = require(path.join(__dirname, "..", "controllers", "controller"));

//pri dotazu na / router se zepta controlleru na funkci loginPage
router.get("/", controller.loginPage);
//pri dotazu na /login se zepta controlleru na funkci login
router.post("/login", controller.login);
//pri dotazu na /register se zepta na funkci registerPage
router.get("/registerPage", controller.registerPage);
//pri dotazu na /login se zepta controlleru na funkci login
router.post("/register", controller.register);
//pri dotazu na /notes se zepta controlleru na funkci notesPage
router.get("/notes", controller.notesPage);

//co router ukaze
module.exports = router;