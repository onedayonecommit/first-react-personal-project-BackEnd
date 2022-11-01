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
const { jwt } = require("../modules");
const { EnterMypage } = require("../service/Entermypage");
const { Registwrite } = require("../service/RegistWrite");
const { Freeboardall } = require("../service/Writeall");
const { Freeboardone } = require("../service/Writeone");
const { Deletewrite } = require("../service/Deletewrite");
const { EnterUpdateWrite } = require("../service/Updatewrite");
const { Freeboardsee } = require("../service/Updatawritesee");
const { Freeboardupdatefinal } = require("../service/Updatewritefinal");
const { changepw, changeemail, changephonenum, changenickname } = require("../service/ChangeEmail");

const router = express.Router();

// router.post("/idcheck", (req, res) => {
//     UserIdCheck(req.body.IdInput, req, res)
// })

// router.post("/login", (req, res) => {
//     const { user_id, user_pw } = req.body
//     UserLogin(user_id, user_pw, res)
// })

// router.post("/main/id/check", (req, res) => {
//     MainIdCheck(req.body.user_email, req, res)
// })

// router.post("/id/recheck", (req, res) => {
//     UserSignup(req.body.user_email, req.body.user_pw, req, res)
// })

// router.post("/paysuc", (req, res) => {
//     UpdateTicket(req.body.user_email, req.body.user_ticket, req, res)
// })

// router.post('/getmovie', (req, res) => {
//     getmovies(req, res)
// })

// router.post("/entermypage", (req, res) => {
//     console.log(req.body.accesstoken)
//     EnterMypage(req.body.accesstoken, req, res)
// })

// router.post("/registwrite", (req, res) => {
//     Registwrite(req.body, req, res)
// })

// router.post("/writeall", (req, res) => {
//     Freeboardall(req, res)
// })

// router.post("/writeone", (req, res) => {
//     Freeboardone(req.body.id, req, res)
// })

// router.post("/delete/write", (req, res) => {
//     const { bno, accesstoken, writer } = req.body
//     Deletewrite(bno, accesstoken, writer, req, res)
// })

// router.post("/update/write/enter", (req, res) => {
//     const { accesstoken, writer, bno } = req.body
//     EnterUpdateWrite(accesstoken, writer, bno, req, res)
// })

// router.post("/update/write", (req, res) => {
//     const { title, content, accesstoken, bno } = req.body
//     Freeboardupdatefinal(title, content, accesstoken, bno, req, res)
// })

// router.post("/update/write/see", (req, res) => {
//     console.log(req.body)
//     Freeboardsee(req.body.bno, req, res)
// })

// router.post("/pwchanger", (req, res) => {
//     const { accesstoken, user_pw } = req.body
//     changepw(accesstoken, user_pw, req, res)
// })
// router.post("/emailchanger", (req, res) => {
//     const { accesstoken, user_email } = req.body
//     changeemail(accesstoken, user_email, req, res)
// })
// router.post("/phonenumchanger", (req, res) => {
//     const { accesstoken, user_phone } = req.body
//     changephonenum(accesstoken, user_phone, req, res)
// })
// router.post("/nicknamechanger", (req, res) => {
//     const { accesstoken, user_nickname } = req.body
//     changenickname(accesstoken, user_nickname, req, res)
// })

module.exports = router