const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const {init} = require('./services/db')
const cors = require('cors')


const app = express();
init();

app.use(cors())

app.use(express.json());

app.use('/', require('./routes/index.routes'));

const {PORT} = process.env

app.listen(PORT, ()=>console.log(`Estoy en el puerto ${PORT}`));
