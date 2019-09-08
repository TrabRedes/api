const path = require('path');
const pathName = path.join(__dirname.replace('/controllers', ''))+'/public/views/root/'

module.exports = {
    root(req, res) {
        res.sendFile(pathName+'index.html');
    }, 
    chatjs(req, res){
        res.sendFile(pathName+'chat.js');   
    }, 
    style(req,res){
        res.sendFile(pathName+'style.css');
    }
};