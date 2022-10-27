const { Freeboard } = require("../models");
const { AT_VERIFY } = require("./Verifyjwt");

module.exports.EnterUpdateWrite = (at, writer, bno, req, res) => {
    const verifyResult = AT_VERIFY(at)
    console.log(verifyResult)
    console.log(writer)
    if (writer == verifyResult) {
        res.send({ updatestatus: true, bno: bno })
    }
    else if (verifyResult != "error") {
        res.send({ updatestatus: false })
    }
    else if (verifyResult == "error") {
        res.send({ updatestatus: 3 })
    }
}

module.exports.UpdateWrite = () => {

}