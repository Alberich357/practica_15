const express = require('express');  //importamos la dependencia
let app = express(); //declaramos una App de Express
let port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname +  '/public'));

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

//primera ruta (esta al nivel de la raiz /), Hello world!
app.get('/', (req, res) => {
    res.send('<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8"> <title>Document</title> </head>  <body> <h1>Hola mundo</h1> </body> </html')});


//terecera ruta, recibe un parametro
app.get('/person/:id',(req, res) =>{
   res.render('person' ,{Name: req.params.id, Message: req.query.message,Times: req.query.times});
});

app.get('/student', (req,res)=>{
    //res.render('nombre de la vista, parametros);
    res.render('index')
}); 

app.post('/student', (req,res)=>{
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`)
});

app.listen(port); //levantar el server y ponerle a la escucha