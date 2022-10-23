const { jwt } = require('../modules/index')

module.exports.SignAT = (id) => {
    try {
        const getAT = jwt.sign({
            user_email: id
        }, process.env.AT_SIGN_KEY, {
            expiresIn: "1h",
            issuer: "poobin"
        })
        return getAT
    } catch (error) {
        console.log(error)
    }
}

module.exports.SignRT = (id) => {
    try {
        const getRT = jwt.sign({
            user_email: id
        }, process.env.RT_SIGN_KEY, {
            expiresIn: "14d",
            issuer: "poobin"
        })
        return getRT
    } catch (error) {
        console.log(error)
    }
}