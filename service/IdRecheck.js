const { User } = require("../models")


module.exports.IdReCheck = async (user_email, req, res) => {
    try {
        User.findOne({ where: { user_email } }).then((e) => {
            e == null ? res.send({ msg: "가능", status: true }) : res.send("이미 있는 아이디 입니다. 아이디 찾기 이용바랍니다.")
        })
    } catch (error) {
        console.log(error)
    }
}