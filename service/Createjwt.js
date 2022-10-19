const { jwt } = require('../modules/index')

module.exports.SignAT = (id) => {
    const getAT = jwt.sign({
        user_id: id
    }, process.env.AT_SIGN_KEY, {
        expiresIn: "1h",
        issuer: "poobin"
    })
    return getAT
}

module.exports.SignRT = (id) => {
    const getRT = jwt.sign({
        user_id: id
    }, process.env.RT_SIGN_KEY, {
        expiresIn: "14d",
        issuer: "poobin"
    })
    return getRT
}