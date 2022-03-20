const DataTypes = require('sequelize');

module.exports = (sequelize, DataTypes)=>{
    const Image = sequelize.define('Image',{  
       src : {
        type : DataTypes.STRING(200), // 경로는 url이라 길게
        allownull : false,
       },
    },{
        charset : 'utf8', 
        collate : 'utf8_general_ci', 
    })
    Image.associate = (db) =>{
        db.Image.belongsTo(db.Post)
    }
    return Image;
}