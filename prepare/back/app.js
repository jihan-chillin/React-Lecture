const express = require('express');
const cors = require('cors')
const session = require('express-session')
const passport = require('passport');
const dotenv = require('dotenv');

const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const db = require('./models');
const passportConfig = require('./passport');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(()=>{
        console.log("db연결 성공");
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    // 요청을 받되 nodebird 홈페이지에서 온 요청만 받겠다는 뜻
    origin : '*',
    credential : false,
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res)=>{
    res.send('hello express')
})

app.get('/api', (req, res)=>{
    res.send('hello api')
})

app.get('/api/posts', (req, res)=>{
    res.json([
        {id : 1, content : 'hello'},
        {id : 2, content : 'hello2'},
        {id : 3, content : 'hello3'}
    ])
})

app.use('/post',postRouter);
app.use('/user',userRouter);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized : false,
    resave : false,
    secret : process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3065,()=>{
    console.log("서버 실행중")
})