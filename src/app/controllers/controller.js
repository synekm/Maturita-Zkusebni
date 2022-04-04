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

    let login = model.login(
        username,
        password
    );

    if (login == false) {
        console.log("Spatne jmeno nebo heslo")
        res.redirect("/")
    } else {
        console.log("Prihlaseni probehlo uspesne")
        res.redirect("/notes")
    }
}

//funkce registerPage
exports.registerPage = (req, res) => {
    res.render("register")
}

//funkce register
exports.register = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password

    let register = model.register(
        username,
        password,
        email
    );

    if (register == 0) {
        console.log("Přihlašovací jméno již existuje.");
        res.redirect("/registerPage")
    } else if (register == 1) {
        console.log("E-mail již je zaregistrován.");
        res.redirect("/registerPage")
    } else {
        console.log("Registrace proběhla úspěšně.");
        res.redirect("/registerPage")
    }
};

//funkce notesPage
exports.notesPage = (req, res) => {
    res.render("notes");
}