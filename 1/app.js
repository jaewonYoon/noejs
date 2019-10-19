// path 
const path = require('path'); 
//express 모듈 사용 
const express = require('express');
const app = express();
// router폴더의 라우터 가져오기
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public'))); 


app.use('/admin',adminRoutes); 
app.use(shopRoutes); 

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3002); 