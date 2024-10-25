var express = require('express');
var router = express.Router();

const mainController = require('../controllers/main');

router.get('/', mainController.index);
router.get("/kontak", mainController.kontak);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
