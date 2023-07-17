import {Router} from 'express';
import con from '../config/database.js'

const appTraslado = Router();




//QUERY QUE PERMITA TRASLADAR CANTIDADES DE UN PRODUCTO DE UNA BODEGA A OTRA, DEBE VALIDAD QUE LA CANTIDAD A TRASLADAR EXISTA EN AL BODEGA DE DONDE SALE SI NO ENVIAR UN MENSAJE
/**
 * ? Datos de entrada : 
 ** {
 **     "id_producto": (11),
 **     "id_bodegaOrigen":  (12),
 **     "id_bodegaDestino": (11),
 **     "cantidad": (60)
 ** }
 */

appTraslado.post("/", (req, res) => {
    const { id_producto, id_bodegaOrigen, id_bodegaDestino, cantidad } = req.body;
    con.query(/*SQL*/`
    SELECT * FROM inventarios WHERE id_bodega = ${id_bodegaOrigen} AND id_producto = ${id_producto}`, (err, data) => {
        if (err) {
            console.log("hay error en el primero");
            res.status(500).json({ error: err.message });
        } else {
            const existe1 = data[0] == null ? false : true
            if (existe1 == true) {
                const cantBodOrig = data[0].cantidad;
                if (cantBodOrig < cantidad) {
                    res.json({ message: `La bodega de origen solo contiene ${cantBodOrig} de dicho producto` })
                } else {
                    con.query(/*sql*/`
                    SELECT id_bodega FROM inventarios WHERE id_producto = ${id_producto}`, (err, data) => {
                        if (err) {
                            res.status(500).json({ error: err.message });
                        } else {
                            let existeEnBodDest = false
                            data.forEach(element => {
                                if (element.id_bodega == id_bodegaDestino) {
                                    existeEnBodDest = true
                                }
                            });
                            if (existeEnBodDest == true) {
                                con.query(/*sql*/`
                                UPDATE inventarios SET cantidad = cantidad - ${cantidad} WHERE id_bodega = ${id_bodegaOrigen} AND id_producto = ${id_producto}`, (err, data) => {
                                    if (err) {
                                        res.status(500).json({ error: err.message });
                                    } else {
                                        con.query(/*sql*/`
                                        UPDATE inventarios SET cantidad = cantidad + ${cantidad} WHERE id_bodega = ${id_bodegaDestino} AND id_producto = ${id_producto}`, (err, data) => {
                                            if (err) {
                                                res.status(500).json({ error: err.message });
                                            } else {
                                                res.json({ message: `${cantidad} del producto ${id_producto} movido existosamente de la bodega ${id_bodegaOrigen} a la bodega ${id_bodegaDestino}` });
                                            }
                                        }
                                        );
                                    }
                                }
                                );
                            } else {
                                con.query(/*sql*/`
                                SELECT * FROM bodegas WHERE id = ${id_bodegaDestino}`, (err, data) => {
                                    if (err) {
                                        res.status(500).json({ error: err.message });
                                    } else {
                                        const existe2 = data[0] == null ? false : true
                                        if (existe2 == true) {
                                            con.query(/*sql*/`
                                            UPDATE inventarios SET cantidad = cantidad - ${cantidad} WHERE id_bodega = ${id_bodegaOrigen} AND id_producto = ${id_producto}`, (err, data) => {
                                                if (err) {
                                                    res.status(500).json({ error: err.message });
                                                } else {
                                                    con.query(/*sql*/`
                                                    INSERT INTO inventarios (id,id_bodega, id_producto, cantidad) VALUES (100,?,?,?)`, [id_bodegaDestino, id_producto, cantidad], (err, data) => {
                                                        if (err) {
                                                            res.status(500).json({ error: err.message, aca: "aca" });
                                                        } else {
                                                            res.json({ message: `${cantidad} del producto ${id_producto} movido existosamente de la bodega ${id_bodegaOrigen} a la bodega ${id_bodegaDestino}` });
                                                        }
                                                    }
                                                    );
                                                }
                                            }
                                            );
                                        } else {
                                            res.json({ message: `La bodega destino (${id_bodegaDestino}) no existe, primero debe crearla` });
                                        }
                                    }
                                }
                                );
                            }
                        }
                    }
                    );
                }
            } else {
                res.json({ message: `La bodega origen (${id_bodegaOrigen}) no existe o no tiene un producto con ese id (${id_producto})` });
            }
        }
    }
    );
});


export default appTraslado;