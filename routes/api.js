const express = require('express');
const router = express.Router();
const Players = require('../models/Players');

router.post('/', async (req, res)=>{
    const { name, position, team, poster } = req.body;
    const newPlayer = new Players({
        name: name,
        position: position,
        team: team,
        poster: poster
    });
    try{
        const player = await newPlayer.save();
        if(!player) throw Error('Algo salió mal al intentar guardar en la Base de Datos');
        res.status(200).json(player);
    }catch(err){
        res.status(400).json({msg: err})
    }
});

router.get('/', async (req, res)=>{
    const players = await Players.find();
    if(players){
        res.send(players);
        res.status(200);
    }else{
        res.send('not found');
        res.status(400);
    }
});

module.exports = router
