const { User } = require("../models");

module.exports.MainIdCheck = (id, req, res) => {
    User.findOne({ where: { user_id: id } }).then((e) => {
        e == null ? res.send("회원가입 창으로") : res.send("로그인 창으로")
    })
}