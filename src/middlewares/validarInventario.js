import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Inventario } from '../controller/Inventarios.js';

const proxyInventario = express();
proxyInventario.use((req, res, next) => {
    try {
        let data = plainToClass(Inventario, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyInventario;