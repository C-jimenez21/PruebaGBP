import { Router } from "express";
import con from '../config/database.js'

const appInventario = Router();

appInventario.get('/', (req, res) => {
        con.query('select * from inventarios',(err, data) => {
            if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al mostrar la database' });}
            console.table(data);
            res.json(data);
        });
    });

appInventario.post('/', (req, res) => {    
    con.query('SELECT * FROM inventarios WHERE id_producto = ? and id_bodega = ?',
    [req.body.id_producto,req.body.id_bodega],
    (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ mensaje: 'Error al consultar la base de datos' })
        }
            if(rows.length > 0) {
                con.query('UPDATE inventarios SET cantidad = cantidad + ? WHERE id_bodega = ? AND id_producto = ?',
                [req.body.cantidad, req.body.id_bodega, req.body.id_producto],
                (err) => {
                    if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al actualizar el registro' });}
                    res.json({ mensaje: 'Registro actualizado exitosamente' });
                });
            }else{
                con.query('INSERT INTO inventarios(id_producto, id_bodega, cantidad) VALUES (?,?,?)',
                [req.body.id_producto, req.body.id_bodega, req.body.cantidad],
                (err) => {
                    if (err) {console.error(err); return res.status(500).json({ mensaje: 'Error al ingresar el registro' });}
                    res.json({ mensaje: 'Registro ingresado exitosamente'});
                });
            }
        }
        )
    });


        

export default appInventario;