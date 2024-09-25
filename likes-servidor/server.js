const express = require('express');
const app = express();
const cors = require('cors');
const likeRoutes = require('./routes/likeRoutes');
require('./config/baseDatos'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', likeRoutes);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});