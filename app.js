const express = require('express');
const dot = require("dotenv").config()
const app = express();
const cors = require("cors");
const Session = require("./config/session");
const session = require("express-session");
const { sequelize } = require("./models/index");
const post = require('./router/post');
const get = require("./router/get")
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(session(Session))
app.use(post)
app.use(get)
sequelize.sync({ force: false })
    .then(() => {
        console.log("db connected");
    })
    .catch((error) => {
        console.log(error);
    });

app.listen(port, () => {
    console.log(port)
})

