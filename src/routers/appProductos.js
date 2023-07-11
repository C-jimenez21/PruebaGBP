import {Router} from 'express';
import dotenv from 'dotenv';
import con from '../config/database.js'

const appProducto = Router();
dotenv.config();


appProducto.get('/:id?', (req, res) => {
     con.query(`SELECT p.id, p.nombre, SUM(i.cantidad) AS Total
     FROM productos p
     INNER JOIN inventarios i ON p.id = i.id_producto
     GROUP BY p.id, p.nombre
     ORDER BY Total DESC;`,
        (err, data, fils) =>{
            console.log(err)
            console.table(data);
            res.status(200).send(data);
        }
    )
})

export default appProducto;