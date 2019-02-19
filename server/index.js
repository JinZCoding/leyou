// index.js 后端入口文件，启动后端服务

const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(3030);
console.log('success listen at port:3030......');

// db.js 数据库连接配置
// api.js 连接数据库，各种方法实现
// sqlMap.js sql语句
// router.js 后端 express 路由配置
