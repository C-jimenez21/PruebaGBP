import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Producto } from '../controller/Productos.js';

const proxyProducto = express();
proxyProducto.use((req, res, next) => {
    try {
        let data = plainToClass(Producto, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyProducto;