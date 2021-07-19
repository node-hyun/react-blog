const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require("../../models/user");
const config = require("../../config");

const router = express.Router();
const { JWT_SECRET } = config;

router.get('', async (req, res) => {
    try {
        const users = await User.find();

        if (!users) throw Error("No users")

        res.status(200).json(users)
    } catch (e) {
        console.log("error : ", e);
    }
})

router.post("/", (req, res) => {
    console.log(req);
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "모든 필드를 채워주세요" });
    }
    // Check for existing user
    User.findOne({ email }).then((user) => {
        if (user)
            return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다" });

        // 새로운 유저 정보 생성 (저장 전단계)
        const newUser = new User({
            name,
            email,
            password,
        });

        // bcrypt 를 이용한 암호화 + 유저 정보 저장 + 응답 설정
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                // 암호화된 비밀번호 적용 
                newUser.password = hash;

                // 이시점에서 새로운 유저 정보를 저장한뒤 토큰 생성 + user 정보 응답 설정
                newUser.save().then((user) => {
                    jwt.sign(
                        { id: user.id },
                        JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                },
                            });
                        }
                    );
                });
            });
        });
    });
});


module.exports = router;
