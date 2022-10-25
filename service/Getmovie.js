const { Movie } = require("../models");

module.exports.getmovies = (req, res) => {
    Movie.findAll({}).then((e) => {
        res.send(e)
    }).catch((error) => {
        console.log(error)
    })
}