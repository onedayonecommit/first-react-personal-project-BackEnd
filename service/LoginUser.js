const { User } = require("../models/index");
const { SignAT } = require("./Createjwt");

module.exports.UserLogin = async (id, pw, res) => {
    User.findOne({ where: { user_id: id, user_pw: pw } }).then((e) => {
        e == null ? res.send('아이디/비밀번호 확인 바랍니다.') : res.send(SignAT(id))
    })
}