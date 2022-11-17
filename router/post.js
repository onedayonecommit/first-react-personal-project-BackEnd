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

module.exports = router