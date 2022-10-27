const { Freeboard } = require("../models");

module.exports.Freeboardsee = (bno, req, res) => {
    Freeboard.findOne({ where: { bno } }).then((e) => {
        e !== null ? res.send({ title: e.title, content: e.content }) : res.send("fail")
    })
}