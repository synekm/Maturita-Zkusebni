//path pro nazev slozky
const path = require("path");
//simple-json-db pro databazi s jmeny a hesly
const jsondb = require("simple-json-db");
//bcrypt pr hashovani hesel
const bcrypt = require("bcrypt");

//vytvoreni databaze s prihlaovacimi udaji
const db = new jsondb(path.join(__dirname, "..", "..", "data", "loginInfo.json"));

exports.login = (username, password) => {
    if (db.has(username)) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        
        const result = bcrypt.compareSync(hashedPassword, db.get(username));

        if (result) {
            
        } else {

        }

    } else {

    }
}