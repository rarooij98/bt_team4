const express = require('express');
const app = express();
const port = process.env.port || 3000;

//engine kiezen
const { engine } = require('express-handlebars');
app.engine('handlebars', engine({
    extname: "handlebars",
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}))
app.set('view engine', 'handlebars')
app.set('views', './views')

//styles inladen
app.use(express.static(__dirname + '/static'))

//laat home form zien
app.get('/', (req, res) => {
    res.render('home')
    })

//Server luistert op poort 8080
app.listen(port)