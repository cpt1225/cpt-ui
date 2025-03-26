const path = require('path')
// 拼接绝对路径
const PROJECT_PATH = path.resolve(__dirname, '../')
// 项目名
const PROJECT_NAME = path.parse(PROJECT_PATH).name

const isDev = process.env.NODE_ENV !== 'production';

const SERVER_HOST = '127.0.0.1';

const SERVER_PORT = 9000;

module.exports = { 
  PROJECT_PATH,
  PROJECT_NAME,
  isDev,
  SERVER_HOST,
  SERVER_PORT
}

