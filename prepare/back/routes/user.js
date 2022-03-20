const express = require('express')
const bcrypt = require('bcrypt')
const {User} = require('../models')

const router = express.Router();

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