import express from 'express';
import dotenv from 'dotenv';
import appBodegas from './src/routers/appBodegas.js';


dotenv.config();

const expressApp = express();

expressApp.use('/bodegas', appBodegas);
let config = JSON.parse(process.env.SERVER_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`Server is running on port ${config.hostname}:${config.port}`);
});
