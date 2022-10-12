const express = require('express');
const dot = require("dotenv").config()
const app = express();
const cors = require("cors");
const Session = require("./config/session");
const session = require("express-session");

const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(session(Session))

app.listen(port, () => {
    console.log(port)
})

app.get("/", (req, res) => {
    res.send("hi")
})

app.get("/session", (req, res) => {
    req.session.hi = "hi react session"
    res.send({ "session": "hi react session" })
    console.log(req.session)
})

app.post("/session/post", (req, res) => {
    console.log(req.body.sessionkey)
    res.send("Thank you so much")
})