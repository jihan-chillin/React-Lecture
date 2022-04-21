const {Strategy : LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');
const passport = require('passport');

const {User} = require('../models')

module.exports = () =>{
    passport.use(new LocalStrategy({
        //req.body에 대한 설정 (서버에선 데이터를 req.body로 받으니깐!!)
        usernameField : 'email',
        passwordField : 'password',
    },async (email, password, done)=>{
        // 0. 비동기 요청시 서버에러가 발생할 수 있기 때문에
        // 항상 try-catch문으로 대비책을 마련할 것!
        try{
            const user = await User.findOne({
                where : {email}
            });
            // 1. 이메일 존재여부
            if(!user){
                // done(서버에러, 성공, 클라이언트에러)
                return done(null, false, {reason : '존재하지 않는 사용자입니다.'})
            }
            // 2. 이메일 존재하면, 해당 이메일 비밀번호와 비교
            // 요청으로 들어온 Password와 DB에 있는 user의 Password를 비교
            const result = await bcrypt.compare(password, user.password)
            if(result){
                return done(null, user);
            }
            // 3. 비밀번호가 틀렸을 때, 
            return done( null, false, {reason : '비밀번호가 틀렸습니다. '})
        }
        catch(e){
            console.error(e);
            return done(e);
        }
    }));
}