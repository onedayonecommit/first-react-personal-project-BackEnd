const Session = require("../config/session");
const session = require("express-session");
const express = require("express");
const mysql = require("mysql2");
const { UserSignup } = require("../service/SignupUser");
const { IdCheck, UserIdCheck } = require("../service/IdCheck");
const { UserLogin } = require("../service/LoginUser");

const temp = mysql.createConnection({
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_ROOT_NAME
})
const router = express.Router();
// router.use(express.json());
router.use(express.urlencoded({ extended: false }))

router.post("/idcheck", (req, res) => {
    UserIdCheck(req.body.IdInput, req, res)
})

router.post("/signup", (req, res) => {
    const { IdInput, PwInput } = req.body
    UserSignup(IdInput, PwInput, req, res);
})

router.post("/Login", (req, res) => {
    const { IdInput, PwInput } = req.body
    UserLogin(IdInput, PwInput, res)
})
module.exports = router