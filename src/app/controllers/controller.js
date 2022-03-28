//path pro jmeno slozky
const path = require("path");

//propojeni modelu
const model = require(path.join(__dirname, "..", "models", "model"));

//funkce loginPage
exports.loginPage = (req, res) => {
    res.render("login")
}

//funkce login
exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    model.login(
        username,
        password
    );
}