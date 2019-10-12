// const express = require('express');
// const router = express.Router();
// const fs = require('fs');

const express = require('express');
const router = express.Router();
const fs = require('fs');

// router.get('/', function(req, res) {
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   res.render('dinosaurs/index', {dinos: dinoData});
// });

router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos)
    console.log(dinoData)
    res.render('dinosaurs/index', {dinos: dinoData});
});



// router.post('/', function(req, res) {
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   dinoData.push(req.body);
//   fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
//   res.redirect('/dinosaurs');
// });

router.post('/', function(req, res) {
    //read the dinos out of the file
    var dinos = fs.readFileSync('./dinosaurs.json');
    //now dinoData is that array
    var dinoData = JSON.parse(dinos);
    dinoData.push(req.body);
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs');
})

// router.get('/new', function(req, res) {
//   res.render('dinosaurs/new');
// });

router.get('/new', function(req, res) {
    res.render('dinosaurs/new');
});

// router.get('/edit/:id', function(req, res) {
//   var index = parseInt(req.params.id);
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   res.render('dinosaurs/edit', {
//     dino: dinoData[index],
//     dinoIndex: index
//   });
// });

router.get('/edit/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/edit', {
        dino: dinoData[index], 
        dinoIndex: index
    });//object needs dino: {name:string, type: string}, dinoIndex: int
})

// router.put('/:id', function(req, res) {
//   var index = parseInt(req.params.id);
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   dinoData[index] = req.body;
//   fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
//   req.redirect(`/dinosaurs/${index}`);  
// });

//EDIT ONE DINO
router.put('/:id', function(req, res) {
    //READ THE DINO JSON FILE
    var index = parseInt(req.params.id);
    //UPDATE THE DINO AT THE INDEX (RE.PARAMS.ID)
    var dinos = fs.readFileSync('./dinosaurs.json');
    //STRINGIFY JSON and rewrite the dinosaur.json
    var dinoData = JSON.parse(dinos);
    //redirect to the dino show page
    dinoData[index] = req.body
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect(`/dinosaurs/${index}`);
})




// router.delete('/:id', function(req, res) {
//   var index = parseInt(req.params.id);
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   dinoData.splice(dinoData[index], 1);
//   res.redirect('/dinosaurs');
// });


//DELETE ONE DINO
router.delete('/:id', function(req, res) {
    //FILE
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json')
    var dinoData = JSON.parse(dinos);
    var deletedDino = dinoData.splice(index, 1);
    console.log(`Goodbye ${deletedDino.name}.`)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    res.redirect('/dinosaurs');
})

// router.get('/:id', function(req, res) {
//   var index = parseInt(req.params.id);
//   var dinos = fs.readFileSync('./dinosaurs.json');
//   var dinoData = JSON.parse(dinos);
//   res.render('dinosaurs/show', {
//     dino: dinoData[index],
//     dinoIndex: index
//   });
// });

//route parameter
router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    //this is the ShowRoot.ejs
    res.render('dinosaurs/show', {dino: dinoData[index], dinoIndex:index});
});

module.exports = router;










//post route

//SHOW EDIT FORM


// SHOW ONE DINO









// module.exports = router;