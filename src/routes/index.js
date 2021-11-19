var express = require('express');
var router = express.Router();
const {index,detail} = require("../controllers/meincontroller");

/* GET home page. */
router.get('/', index);
router.get('/detalleMenu/:id', detail);

module.exports = router;
