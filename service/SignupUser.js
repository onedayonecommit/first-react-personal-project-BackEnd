const { User } = require("../models/index");

module.exports.UserSignup = async (user_email, user_pw, req, res) => {
    try {
        await User.findOne({ where: { user_email } }).then((e) => {
            e == null ? User.create({
                user_email,
                user_pw
            }).then((e) => {
                console.log(e)
                res.send({ msg: "축하합니다.", status: true })
            }).catch((error) => {
                res.send("실패")
            }) : res.send("오류 발생")
        })
    } catch (error) {
        console.log(error)
    }

}