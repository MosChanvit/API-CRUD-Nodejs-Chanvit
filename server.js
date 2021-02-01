let express = require('express');
let mysql = require('mysql');
let app = express();
let bodyParser = require('body-Parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    return res.send({
        error:false,
        message:"Welcome to REST CRUD API By Chanvit",
    })
})


app.use('/api/product', require('./routes/api/product'));
app.use('/api/category', require('./routes/api/category'));


app.listen(3000,()=>{
    // console.log("app runing ");
})

module.exports = app;