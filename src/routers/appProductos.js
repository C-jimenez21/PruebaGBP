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

appProducto.post('/', (req, res)=>{
    con.query(
        `INSERT INTO productos SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(data.affectedRows+200).send(data)
        }
    )
   con.query(
    `INSERT INTO inventarios SER ?`,
    {
        "id": 21,
        "nombre": "DEFAULTalcrearProducto",
        "descripcion": "Dulces y mas",
        "estado": 1,
        "created_by": 11,
        "update_by": null,
        "created_at": "2022-07-01T22:37:06.000",
        "updated_at": null,
        "deleted_at": null
      }
   ),
   (err, data, fils) =>{
        console.log(err)
        console.table(data)
        res.status(200).send(data);
   }
})


export default appProducto;