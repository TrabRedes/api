const path = require('path');
const pathName = path.join(__dirname.replace('/controllers', ''))+'/public/views/dashboard/'

module.exports = {
    root(req, res) {
        res.sendFile(pathName+'index.html');
    }, 
    chart(req, res){
        res.sendFile(pathName+'chart.js');   
    }, 
    style(req,res){
        res.sendFile(pathName+'style.css');
    }
};