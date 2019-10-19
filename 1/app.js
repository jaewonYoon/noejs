// path 
const path = require('path'); 
//express 모듈 사용 
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','views');
// router폴더의 라우터 가져오기
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public'))); 

const errorController = require('./controllers/error');

app.use('/admin',adminRoutes);
app.use(shopRoutes); 

app.use('/',errorController.get404);

app.listen(3002); 