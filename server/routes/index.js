var router = require('express').Router();
var path = require('path');

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../public/views/home.html'));
})

module.exports = router;
