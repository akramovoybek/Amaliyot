const express = require('express');
const path=require('path')
const port=process.env.PORT||2020;
var count=0
const app=express();

app.use(express.static(path.join(__dirname, 'view')));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// app.use(express.)
app.get('/', (req, res) => {
    res.render('index',{count:++count});
});

app.listen(port, () => {
    console.log("The server is running, Please open your browser at http://localhost:%s",port);
});