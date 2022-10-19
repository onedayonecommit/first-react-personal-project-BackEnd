const { User } = require("../models/index")

module.exports.UserIdCheck = async (id, req, res) => {
    try {
        User.findOne({ where: { user_id: id } }).then((e) => {
            e == null ? res.send("사용 가능합니다.") : res.send("이미 사용중인 아이디 입니다.")
        })
    } catch (error) {
        res.send("알 수 없는 에러 발생")
    }
}