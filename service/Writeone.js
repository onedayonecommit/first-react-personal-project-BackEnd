const { Freeboard } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.Freeboardone = (bno, req, res) => {
    Freeboard.findOne({ where: { bno } }).then((e) => {
        res.send(e)
    }).catch((error) => {
        console.log(error)
    })
}