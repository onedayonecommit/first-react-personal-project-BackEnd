const { User } = require("../models");

module.exports.UpdateTicket = async (user_email, user_ticket, req, res) => {
    User.update({ user_ticket }, { where: { user_email } }).then((e) => {
        res.send("구매 완료 로그인 후 즐겁게 감상 바랍니다.")
    }).catch((error) => {
        console.log(error)
    })
}