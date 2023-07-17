import express from 'express';
import dotenv from 'dotenv';
import appBodegas from './src/routers/appBodegas.js';
import appProducto from './src/routers/appProductos.js';
import appInventario from './src/routers/appInventarios.js';
import appTraslado from './src/routers/appTrasladar.js';


dotenv.config();

const expressApp = express();

expressApp.use(express.json());

expressApp.use('/bodegas', appBodegas);
expressApp.use('/productos', appProducto);
expressApp.use('/inventarios', appInventario);
expressApp.use('/trasladar', appTraslado);



let config = JSON.parse(process.env.SERVER_CONFIG);

expressApp.listen(config, ()=>{
    console.log(`Server is running on port ${config.hostname}:${config.port}`);
});
