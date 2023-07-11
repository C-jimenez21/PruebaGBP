import express from 'express';
import dotenv from 'dotenv';
import appBodegas from './src/routers/appBodegas.js';
import appProducto from './src/routers/appProductos.js';


dotenv.config();

const expressApp = express();

expressApp.use(express.json());
expressApp.use('/bodegas', appBodegas);
expressApp.use('/productos', appProducto)


let config = JSON.parse(process.env.SERVER_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`Server is running on port ${config.hostname}:${config.port}`);
});
