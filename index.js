const express = require("express");
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
    layoutDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}))

// app.use(express.static('public'))

const emp = () => {
    return [
        {
            name:'san song',
            positions:'Dev'
        },
        {
            name:'ya na',
            positions:'Dev'
        },
        {
            name:'kaka sa',
            positions:'Dev'
        },
        {
            name:'sav mey',
            positions:'Dev'
        },
    ]
}

const listExists = false;
app.get('/', (req, res) => {
    res.render('main', {emp : emp(), listExists:listExists})
})

app.listen(port, ()=>{
    console.log(`App listening to port ${port}`);
})