// const express = require('express');
// const ejsLayouts = require('express-ejs-layouts');
// const fs = require('fs');
// const methodOverride = require('method-override');

const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
const methodOverride = require('method-override');

// const app = express();
const app = express();


//LAYOUTS AND FRONT END
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static('static'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.set('view engine', 'ejs');
// app.use(ejsLayouts);
// app.use(express.static('static'));
// app.use(express.urlencoded({
//   extended: false
// }));
// app.use(methodOverride('_method'));

app.get('/', function(req, res) {
  res.render("Home");
});

// app.get('/', function(req, res) {
//     res.render('home');
// });

app.use('/dinosaurs', require('./routes/dinosaurs'));
app.use('/cryptids', require('./routes/cryptids'));

// app.use('/dinosaurs', require('./routes/dinosaurs'));
// app.use('/cryptids', require('./routes/cryptids'));


app.listen(3000, function (){
        console.log('you are listening to the sweet sounds of 3000')
    })
// app.listen(3000, function() {
//   console.log("Server listening on port 3000...")
// });



















 