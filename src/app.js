const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/useregi");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/homepage", (req, res) => {
    res.render("main");
})

app.post("/homepage", async(req, res) => {
    try {
        const registerUSer = new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const registered = await registerUSer.save();
        res.status(201).render("main");
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log('====================================');
    console.log(`server is running at port no ${port}`);
    console.log('====================================');
})