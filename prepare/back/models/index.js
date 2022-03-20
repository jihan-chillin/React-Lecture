const Sequelize = require('sequelize');

// 환경변수 설정
const env = process.env.NODE_ENV || 'development';

// [env] : development/production/test모드
// 각각 따로 환경 줘야할 때, 하드코딩할 필요없이 env 변수 넣어주면
// 알아서 데이터베이스 환경 설정됨.
const config = require('../config/config')[env];
const db= {};

// 시퀄라이즈가 mysql을 연결해주는 코드
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// model불러오기
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// 테이블 생성
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
