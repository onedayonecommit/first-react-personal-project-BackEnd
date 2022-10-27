const { User } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.EnterMypage = async (at, req, res) => {
    const atResult = AT_VERIFY(at)
    if (atResult !== "error") {
        const UserResult = await User.findOne({ where: { user_email: atResult } })

        res.send({
            id: UserResult.id,
            user_email: UserResult.user_email,
            user_phone: UserResult.user_phone,
            user_nickname: UserResult.user_nickname,
            user_ticket: UserResult.user_ticket,
            sucstatus: true
        })
    }
    else {
        res.send({ sucstatus: false })
    }
}