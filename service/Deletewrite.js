const { Freeboard } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.Deletewrite = (bno, at, writer, req, res) => {
    const verifyResult = AT_VERIFY(at)
    if (verifyResult != "error") {
        Freeboard.findOne({ where: { bno: bno, writer: verifyResult } }).then((e) => {
            e === null ? res.send({ deletestatus: false }) : Freeboard.destroy({ where: { bno: bno, writer: verifyResult } }).then((ee) => {
                console.log("삭제 성공")
                res.send({ deletestatus: true })
            })
        })
    } else {
        res.send({ deletestatus: 3 })
    }
}