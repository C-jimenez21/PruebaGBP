import {Router} from 'express';
import dotenv from 'dotenv';
const appBodegas = Router();
dotenv.config();
let config = JSON.parse(process.env.SERVER_CONFIG);
appBodegas.get('/bodegas', (req, res, config) => {
    console.log(config.host, config.port);
    console.log(req.headers);
    res.send("config");
})

export default appBodegas;