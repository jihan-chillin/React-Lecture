const DataTypes = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Hashtag = sequelize.define('Hashtag',{  
       name : {
           type : DataTypes.STRING(20),
           allownull : false,
       },
    },{
        charset : 'utf8mb4', // 이모티콘 저장
        collate : 'utf8mb4_general_ci', 
    })
    Hashtag.associate = (db) =>{
        db.Hashtag.belongsToMany(db.Post, {through : 'postHashtag'})
    }
    return Hashtag;
}