const express = require('express');
const router = express.Router()

const menucontroller = require('../controller/menus-controller');

router.get('/', menuscontroller.index);
router.get('/menu/:id', menuscontroller.details);
router.get('/info', menuscontroller.info);

module.exports = router;