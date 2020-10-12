const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Luis',
    //     edad: 29,
    //     url: req.url
    // };

    res.render('home', {
        nombre: 'Luis',
        anio: new Date().getFullYear()
    });


});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Luis',
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});