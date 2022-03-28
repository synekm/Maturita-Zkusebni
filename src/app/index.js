//express pro webovou aplikaci
const express = require("express");
//path pro cestu k slozce
const path = require("path");

//vytvoreni expressove aplikace
const app = express();

//nastaveni view enginu na ejs
app.set("view engine", "ejs");
//nastaveni slozky views
app.set("views", path.join(__dirname, "views"));

//nastaveni staticke slozky se styly
app.use(express.static(path.join(__dirname, "styles")));
//nastaveni expressu aby rozpoznal json v POST
app.use(express.json());
//nastaveni expressu aby rozpoznal string nebo array v POST
app.use(express.urlencoded({"extended": true}));

//nastaveni routeru pro /
app.use("/", require(path.join(__dirname, 'routers', 'router')))

//co modul ukaze
module.exports = app;