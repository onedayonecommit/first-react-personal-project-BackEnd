const Session = require("./config/session");
const session = require("express-session");
const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/signup", (req, res) => {
    let id = req.body.user_id
    let pw = req.body.user_pw
})