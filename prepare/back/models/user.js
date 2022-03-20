const DataTypes = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    // 사용자 정보를 저장할 User를 정의
    const User = sequelize.define('User',{ //MySQL에는 users로 저장된다. 
        email : {
            type : DataTypes.STRING(30),
            allowNull : false, // 필수
            unique : true , // 고유한 값
        }, 
        nickname : {
            type : DataTypes.STRING(30),
            allowNull : false, // 필수
        },
        password : {
            type : DataTypes.STRING(100), // 비밀번호는 암호화가 되기 때문에 조금 넉넉하게 잡는게 좋음
            allowNull : false, // 필수
        },
    },{
        // 모델에 대한 세팅값
        charset : 'utf8',
        collate : 'utf8_general_ci', // 한글저장
    })
    User.associate = (db) =>{
        db.User.hasMany(db.Post)
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, {through : 'Like', as : 'Liked'}) // as 별칭 (대문자로)
        db.User.belongsToMany(db.User, {through : 'Follow', as : 'Followers', foreignKey : 'followingId'})
        db.User.belongsToMany(db.User, {through : 'Follow', as : 'Followings', foreignKey : 'followerId'})
    }
    return User;
}