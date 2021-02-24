const express = require('express');

const app = express();//app es mi server

//peticiones httpp

app.get('/', (req, res) => { //esta vendría a ser la ruta de inicio
    res.send('hola mundo ');
});
//ruta about
app.get('/about',(req,res)=>{
    res.send('About me');
});
app.get('/contact',(req,res)=>{
    res.send('contact me');
});

app.listen(3000, () => { //así ejecutariamos el server? en teoria
    console.log('Server on port 3000')
});
