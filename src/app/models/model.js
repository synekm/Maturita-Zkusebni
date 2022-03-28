//path pro nazev slozky
const path = require("path");
//simple-json-db pro databazi s jmeny a hesly
const jsondb = require("simple-json-db");
//bcrypt pr hashovani hesel
const bcrypt = require("bcryptjs");
const res = require("express/lib/response");

//vytvoreni databaze s prihlaovacimi udaji
const db = new jsondb(path.join(__dirname, "..", "..", "data", "loginInfo.json"));

//funkce login
exports.login = (username, password) => {
    if (db.has(username)) {
        bcrypt.hash(password, 10, (err, hash) => {
            bcrypt.compare(db.get(username), hash, (err, result) => {
                if (result = true) {
                    res.redirect("/notes");
                } 
            });
        });
    } else {
        res.redirect("/");
    }
}