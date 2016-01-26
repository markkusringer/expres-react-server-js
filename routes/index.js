var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var items = [
        'Item 0',
        'Item 1',
        'Item </script>',
        'Item <!--inject!-->',
    ];

    res.render('index', { title: 'Express', items: items });
});

module.exports = router;
