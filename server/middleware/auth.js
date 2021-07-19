const jwt = require("jsonwebtoken")
const config = require("../config/index");
const { JWT_SECRET } = config;


const auth = (req, res, next) => {
    // browser 에서 token 정보 가져 오기 
    const token = req.header('x-auth-token')

    // token 이 없을 경우 401 에러 응답
    if (!token) {
        return res.status(401).json({ msg: "토큰 없음 인증이 거부됨 !!!" })
    }

    // token 이 있을 경우 확인한뒤 req.user 에 세팅 하고 next();
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "토큰값이 유효하지 않습니다" })
    }
}


module.exports = auth;