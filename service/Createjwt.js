const { jwt } = require('../modules/index')

module.exports.SignAT = async (id) => {
    const getAt = await jwt.sign({
        user_id: id
    }, process.env.AT_SIGN_KEY, {
        expiresIn: "1h",
        issuer: "poobin"
    })
    return getAt
}