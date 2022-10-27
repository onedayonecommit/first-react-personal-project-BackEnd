const { Freeboard } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.Freeboardupdatefinal = (title, content, at, bno, req, res) => {
    const atResult = AT_VERIFY(at)
    if (atResult != "error") {
        Freeboard.update({ title: title, content: content }, { where: { writer: atResult, bno: bno } }).then((e) => {
            res.send({ updatestatus: true })
        }).catch((error) => {
            console.log(error)
            res.send({ updatestatus: false })
        })
    }
    else res.send({ updatestatus: 3 })
}