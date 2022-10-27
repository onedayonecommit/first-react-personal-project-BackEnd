const { Freeboard } = require("../models");

module.exports.Freeboardall = (req, res) => {
    Freeboard.findAll({}).then((e) => {
        res.send(e)
    }).catch((error) => {
        console.log(error)
    })
}