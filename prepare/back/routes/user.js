const express = require('express')
const bcrypt = require('bcrypt')
const passport = require('passport')

const { User, Post } = require('../models');
const db = require('../models');

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
        // 모든 정보가 다 있는 user를 fullUser라고 하겠음.
        const fullUserWithoutPassword = await User.findOne({
            where : {id : user.id},
            // attributes : ['id','nickname', 'email'], // 원하는 정보만 가져오고 싶을 때,
            attributes : {
                exclude: ['password']
            },
            include : [{
                model : Post,
            }, {
                model : User,
                as : 'Followings',
            },{
                model : User,
                as : 'Followers',
            }]
        })
        return res.status(200).json(fullUserWithoutPassword);
    });
   // res.setHeader('Cookie','cslhy') 
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

router.post('/logout', (req, res) => {
    console.log(req, res, "이거 백에서 받아오는 뤠쿠ㅠ")
    req.logout();
    req.session.destroy();
    res.send('ok');
  });

module.exports = router;