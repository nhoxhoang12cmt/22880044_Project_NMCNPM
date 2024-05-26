'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressHandlebars = require('express-handlebars');
const {createPagination} = require('express-handlebars-paginate')
app.use(express.static(__dirname + '/public'));
app.engine('hbs',expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname:'hbs',
    defaultLayout:'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers:{
        createPagination
    }
}));
app.set('view engine','hbs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',require('./routes/indexRouter'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));