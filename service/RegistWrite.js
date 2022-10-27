const { Freeboard } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.Registwrite = (body, req, res) => {
    const user_email = AT_VERIFY(body.accesstoken)
    console.log(user_email)
    if (user_email != "error") {
        Freeboard.create({
            writer: user_email,
            title: body.title,
            content: body.content,
            views_point: 0
        }).then((e) => {
            res.send({
                msg: "글 등록 완료",
                writestatus: true
            })
        }).catch((error) => {
            res.send({
                msg: "예기치 못한 에러 발생 재 시도 바랍니다.",
                writestatus: false
            })
        })
    }
    else if (user_email == "error") res.send("로그인이 만료되었습니다. 재 로그인 후 등록 바랍니다.")
}