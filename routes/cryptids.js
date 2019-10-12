
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res) {
    var cryptids = fs.readFileSync('./cryptids.json');
    console.log(cryptids);
    var cryptidData = JSON.parse(cryptids)
    console.log(cryptidData)
    res.render('cryptids/index', {cryptids: cryptidData});
});

router.post('/', function(req, res) {
    //read the cryptids out of the file
    var cryptids = fs.readFileSync('./cryptids.json');
    //now cryptidData is that array
    var cryptidData = JSON.parse(cryptids);
    cryptidData.push(req.body);
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData))
    res.redirect('/cryptids');
})

router.get('/new', function(req, res) {
    res.render('cryptids/new');
});

router.get('/edit/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var cryptid = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptid);
    res.render('cryptids/edit', {
        cryptid: cryptidData[index], 
        cryptidIndex: index
    });//object needs cryptid: {name:string, type: string}, cryptidIndex: int
})


router.put('/:id', function(req, res) {
    //READ THE cryptid JSON FILE
    var index = parseInt(req.params.id);
    //UPDATE THE cryptids AT THE INDEX (RE.PARAMS.ID)
    var cryptids = fs.readFileSync('./cryptids.json');
    //STRINGIFY JSON and rewrite the cryptids.json
    var cryptidData = JSON.parse(cryptids);
    //redirect to the cryptid show page
    cryptidData[index] = req.body
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData));
    res.redirect(`/cryptids/${index}`);
})

router.delete('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var cryptids = fs.readFileSync('./cryptids.json')
    var cryptidData = JSON.parse(cryptids);
    var deletedCryptid = cryptidData.splice(index, 1);
    console.log(`Goodbye ${deletedCryptid.name}.`)
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData))
    res.redirect('/cryptids');
})


router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var cryptid = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptid);
    //this is the ShowRoot.ejs
    res.render('cryptids/show', {cryptid: cryptidData[index], cryptidIndex:index});
});

module.exports = router;
