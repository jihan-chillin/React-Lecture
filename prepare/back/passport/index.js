// 패스포트 설정파일
const passport = require('passport')
const local = require('./local')

module.exports=()=>{
    passport.serializeUser(()=>{
        
    });

    passport.deserializeUser(()=>{

    });

    local();
}