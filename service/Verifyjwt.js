const { jwt } = require("../modules");

module.exports.AT_VERIFY = (at) => {
    try {
        const ATVerifyResult = jwt.verify(at, process.env.AT_SIGN_KEY)
        console.log(ATVerifyResult.user_email)
        return ATVerifyResult.user_email
    } catch (error) {
        return "error"
    }
}

module.exports.RT_VERIFY = (rt) => {
    try {
        const RTVerifyResult = jwt.verify(rt, process.env.RT_SIGN_KEY)
        return RTVerifyResult.user_email
    } catch (error) {
        return "error"
    }
}