const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')

const {User} = require('../models')

const router = express.Router();

router.post('/login', (req, res, next)=>{
    passport.authenticate('local', (err, user, info)=>{
    // 서버쪽 에러가 있을 때,
    if(err){
        console.error(err);
        return next(err); 
    }
    // 클라이언트 에러가 있을 때, 
    if(info){
        return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr)=>{
        if(loginErr){
            console.error(loginErr)
            return next(loginErr);
        }
        // 여기까지가 로그인 완료이고
        // 완료된 결과를 프론트로 넘겨준다.
        return res.json(user);
    });
    // 
    })(req, res, next)
});

router.post('/', async (req, res, next)=>{//Post/user
    try{
        // 이메일 중복체크
        const exUser = await User.findOne({    
            where : {
                email : req.body.email,
            }
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            // 여기서 body가 무엇인지 
            email : req.body.email,
            nickname : req.body.nickname,
            password : hashedPassword,
        });
        res.status(201).send('ok');
    }
    catch(e){
        console.error(e);
        // next를 통해서 에러를 받으면, 완전 짱임
        next(error);
    }
})

module.exports = router;