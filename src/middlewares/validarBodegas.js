import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Bodega } from '../controller/Bodegas.js';

const proxyBodega = express();
proxyBodega.use((req, res, next) => {
    try {
        let data = plainToClass(Bodega, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyBodega;