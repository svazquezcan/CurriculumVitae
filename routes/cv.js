var express = require('express')
var router = express.Router()
const path = require('path');
// const Player = require('./../db/model/Player');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/cv.html'));
})

module.exports = router