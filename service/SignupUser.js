const { User } = require("../models/index");

module.exports.UserSignup = async (user, pw, req, res) => {
    await User.findOne({ where: { user_id: user } }).then((e) => {
        e == null ? User.create({
            user_id: user,
            user_pw: pw
        }).then((e) => {
            console.log(e)
            res.send("축하합니다.")
        }).catch((error) => {
            res.send("실패")
        }) : res.send("중복 검사 먼저 하세요.")
    })

}