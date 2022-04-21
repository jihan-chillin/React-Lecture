exports.isLoggedIn = (req,res,next)=>{
    // 로그인 여부 검사하는 파일
    if(req.isAuthenticated()){
        next();
    }else{
        res.status(401).send('로그인이 필요합니다.');
    }
}

exports.isNotLoggedIn = (req,res,next)=>{
    // 로그인 여부 검사하는 파일
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(401).send('로그인 하지 않은 사용자만 접근 가능합니다.');
    }
}