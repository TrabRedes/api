const path = require('path');

module.exports = {
    root(req, res) {
        res.sendFile(path.join(__dirname.replace('/controllers', '')+'/views/index.html'));
    },
};