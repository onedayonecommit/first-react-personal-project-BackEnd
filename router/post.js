const Session = require("./config/session");
const session = require("express-session");
const express = require("express");
const mysql = require("mysql2");

const temp = mysql.createConnection({
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_NAME
})
const router = express.Router();
router.use(express.json());

router.post("/signup", (req, res) => {
    temp.query("select * from members;", (err, result) => {
        if (err) res.send("에러 발생 재 시도 요청")
        else res.send("회원 가입 완료 로그인 후 이용 바랍니다.")
    })
    let id = req.body.user_id
    let pw = req.body.user_pw
    console.log(id, pw)
})