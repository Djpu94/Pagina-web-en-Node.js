const express = require('express');
const app = express();
const path = require('path');
//configuracion
app.set('port', 4000);
app.set('views',path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    });

//routes
app.use(require('./routes/index'));


//archivos estaticos
app.use(express.static(path.join(__dirname,'public')))


//middlewares