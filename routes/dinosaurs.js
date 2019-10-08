const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos)
    res.render('dinosaurs/index', {dinos: dinoData});
});



//post route
router.post('/', function(req, res) {
    //read the dinos out of the file
    var dinos = fs.readFileSync('./dinosaurs.json');
    //now dinoData is that array
    var dinoData = JSON.parse(dinos);
    dinoData.push(req.body);
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs');router.get('/new', function(req, res) {
        
    })
})

router.get('/new', function(req, res) {
    res.render('dinosaurs/new');
})

//route parameter
router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    //this is the ShowRoot.ejs
    res.render('dinosaurs/show', {dino: dinoData[index]});
})

module.exports = router;