import {Router} from 'express';
import con from '../config/database.js'
import proxyProducto from '../middlewares/validarProductos.js'

const appProducto = Router();

// `SELECT * FROM productos`productos
appProducto.get('/:id?', (req, res) => {
    let QuerySql = [`SELECT p.id, p.nombre, SUM(i.cantidad) AS Total
    FROM productos p
    INNER JOIN inventarios i ON p.id = i.id_producto
    GROUP BY p.id, p.nombre
    ORDER BY Total DESC;`, `SELECT * FROM productos`]
     con.query(QuerySql[1],
        (err, data, fils) =>{
            console.log(err)
            console.table(data);
            res.status(200).send(data);
        }
    )
})

appProducto.post('/', proxyProducto, (req, res)=>{
    con.query(  
        `INSERT INTO productos SET ?`,
        req.body,
        (err, data, fils)=>{
            if(err) {
                console.error('Error al insertar el producto', err);
                res.status(500).json({err: 'Error al insertar el producto'});
            }else{
                console.table(data);
                const producId = data.insertId;
                //bodega por default la 12
                const inventarioData = {
                    id_bodega: 12,
                    id_producto: producId,
                    cantidad: 20
                };
            con.query(
             `INSERT INTO inventarios SET ?`,
             inventarioData,
             (err, data) => {
                if(err){
                    console.error(err);
                    res.status(500).json({err: 'Error al insertar el inventario'});
                }else{
                    console.table(data);
                    res.status(201).json({
                        message: 'Producto creado con éxito'
                      })
                    };
             })
            }
        }
    )});

export default appProducto;