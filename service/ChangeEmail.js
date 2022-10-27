const { User } = require("../models")
const { AT_VERIFY } = require("./Verifyjwt")

module.exports.changeemail = async (at, user_email, req, res) => {
    const verifyResult = AT_VERIFY(at)
    if (verifyResult != "error") {
        User.findOne({ where: { user_email } }).then((e) => {
            e == null ? User.update({ user_email }, { where: { user_email: verifyResult } }).then((e) => {
                res.send({ change_email_status: true })
            }).catch((error) => {
                console.log(error)
                res.send({ change_email_status: false })
            }) : res.send({ change_email_status: 4 })
        }).catch((error) => {
            res.send({ change_email_status: false })
        })

    }
    else { res.send({ change_email_status: 3 }) }
}

module.exports.changepw = async (at, user_pw, req, res) => {
    const verifyResult = AT_VERIFY(at)
    if (verifyResult != "error") {
        User.update({ user_pw }, { where: { user_email: verifyResult } }).then((e) => {
            res.send({ change_pw_status: true })
        }).catch((error) => {
            console.log(error)
            res.send({ change_pw_status: false })
        })
    }
    else { res.send({ change_pw_status: 3 }) }
}

module.exports.changephonenum = async (at, user_phone, req, res) => {
    const verifyResult = AT_VERIFY(at)
    if (verifyResult != "error") {
        User.update({ user_phone }, { where: { user_email: verifyResult } }).then((e) => {
            res.send({ change_phonenum_status: true })
        }).catch((error) => {
            console.log(error)
            res.send({ change_phonenum_status: false })
        })
    }
    else { res.send({ change_phonenum_status: 3 }) }
}

module.exports.changenickname = async (at, user_nickname, req, res) => {
    const verifyResult = AT_VERIFY(at)
    if (verifyResult != "error") {
        User.findOne({ where: { user_nickname: user_nickname } }).then((e) => {
            e == null ? User.update({ user_nickname }, { where: { user_email: verifyResult } }).then((e) => {
                res.send({ change_nickname_status: true })
            }).catch((error) => {
                console.log(error)
                res.send({ change_nickname_status: false })
            }) : res.send({ change_nickname_status: 4 })
        }).catch((error) => {
            res.send({ change_nickname_status: false })
        })

    }
    else { res.send({ change_nickname_status: 3 }) }
}