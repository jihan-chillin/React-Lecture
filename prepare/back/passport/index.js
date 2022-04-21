// 패스포트 설정파일
const passport = require('passport')
const local = require('./local')
const {User} = require('../models')

module.exports=()=>{
    passport.serializeUser((user, done)=>{
        // 첫 번째 인자 : 서버에러
        // 두 번째 인자 : 유저 id
        // 쿠키랑 엮어줄 id만 가져오는 거
        done(null, user.id);
    });

    // 로그인으로 첫 성공한 뒤
    // 그 다음 로그인 요청 부터는 이게 실행돼서
    // DB를 통해 사용자 정보를 복구하게 됨.
    passport.deserializeUser(async (id, done)=>{
        try{
            const user = await User.findOne({where : {id}});
            done(null, user) // 정보를 복구해서 req.user에 넣어줌
        }catch(e){
            console.error(e);
            done(e);
        }
    });

    local();
}