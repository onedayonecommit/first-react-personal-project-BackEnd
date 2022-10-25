const Session = require("../config/session");
const session = require("express-session");
const express = require("express");
const { UserSignup } = require("../service/SignupUser");
const { IdCheck, UserIdCheck } = require("../service/IdCheck");
const { UserLogin } = require("../service/LoginUser");
const { MainIdCheck } = require("../service/MainIdCheck");
const { IdReCheck } = require("../service/IdRecheck");
const { UpdateTicket } = require("../service/UpdateTicket");
const { getmovies } = require("../service/getmovie");

// const temp = mysql.createConnection({
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     user: process.env.DB_ROOT_NAME
// })
const router = express.Router();
// router.use(express.json());
router.use(express.urlencoded({ extended: false }))

router.post("/idcheck", (req, res) => {
    UserIdCheck(req.body.IdInput, req, res)
})

router.post("/login", (req, res) => {
    const { user_id, user_pw } = req.body
    UserLogin(user_id, user_pw, res)
})

router.post("/main/id/check", (req, res) => {
    MainIdCheck(req.body.user_email, req, res)
})

router.post("/id/recheck", (req, res) => {
    console.log(req.body)
    UserSignup(req.body.user_email, req.body.user_pw, req, res)
})

router.post("/paysuc", (req, res) => {
    console.log(req.body)
    UpdateTicket(req.body.user_email, req.body.user_ticket, req, res)
})

router.post('/getmovie', (req, res) => {
    console.log(req.headers.auth)
    getmovies(req, res)

})
module.exports = router