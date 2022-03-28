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

//co router ukaze
module.exports = router;