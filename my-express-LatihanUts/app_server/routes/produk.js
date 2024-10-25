var express = require('express');
var router = express.Router();

const prdController = require('../controllers/produk');
router.get("/", prdController.index);
router.post("/insert", prdController.insert); //insert mahasiswa

module.exports = router;