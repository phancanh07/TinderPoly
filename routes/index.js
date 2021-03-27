var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var duongdan=path.join(__dirname,'index.html');
res.sendFile(duongdan);
});

module.exports = router;
