const DataTypes = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{  
       content : {
           type : DataTypes.TEXT,
           allownull : false,
       },
    },{
        charset : 'utf8mb4', // 이모티콘 저장
        collate : 'utf8mb4_general_ci', 
    })
    Post.associate = (db) =>{
        db.Post.belongsTo(db.User)
        db.Post.hasMany(db.Comment)
        db.Post.hasMany(db.Post, {as : 'Retweet'}) // 리트윗하는 post -> postId가 아니라 retweetId가 생성됨.
        db.Post.hasMany(db.Image)
        db.Post.belongsToMany(db.Hashtag,{through : 'postHashtag'}) // N : M 관계
        db.User.belongsToMany(db.User, {through : 'Like',as : 'Likers'})
    }   
    return Post;
}