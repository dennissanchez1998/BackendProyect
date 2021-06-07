//1.importaciones
const express = require('express');
const cors = require('cors');
const app = express();
const conectarDB = require('./config/db');
const authRoutes = require('./routes/auth');

require('dotenv').config({
    path: '.env'
})

//2.MIDDLEWARE
app.use(cors());
//a. conectarnos a la bd
conectarDB();

app.use(express.json({
    extended: true
}));

//3.RUTEO


// B. Autenticación
app.use('/api/auth', authRoutes)












//4.SERVIDOR

app.listen(4000, () => {
    console.log("el servidor corriendo");
})