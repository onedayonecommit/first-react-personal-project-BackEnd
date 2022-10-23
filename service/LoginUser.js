const { User } = require("../models/index");
const { SignAT, SignRT } = require("./Createjwt");

module.exports.UserLogin = async (id, pw, res) => {
    try {
        User.findOne({ where: { user_email: id, user_pw: pw } }).then((e) => {
            e == null ? res.send('아이디/비밀번호 확인 바랍니다.') : res.send(SignAT(id))
        })
    } catch (error) {
        console.log(error)
    }
}

// module.exports.UserLogin = async (id, pw, res) => {
//     User.findOne({ where: { user_id: id, user_pw: pw } }).then((e) => {
//         e == null ? res.send('아이디/비밀번호 확인 바랍니다.') : User.update({ user_refresh: SignRT(id) }, { where: { user_id: id } }).then(() => {
//             res.send(SignAT(id))
//         })

//     })
// }