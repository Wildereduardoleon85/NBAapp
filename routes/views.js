const express = require('express');
const router = express.Router();
const Players = require('../models/Players');

router.get('/', async(req, res)=>{
    await res.render('index');
})

module.exports = router
