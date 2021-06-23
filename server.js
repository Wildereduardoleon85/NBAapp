const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

//Inicializaicones 
const app = express();
require('./config');

//Configuraciones
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.json());

//Rutas
app.use('/api/players', require('./routes/api'));
app.use('/nbaplayers', require('./routes/views'));

//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> console.log(`Servidor corriendo en el Puerto: ${PORT}`));

