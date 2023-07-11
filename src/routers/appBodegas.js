import {Router} from 'express';
import dotenv from 'dotenv';
import con from '../config/database.js'

const appBodegas = Router();
dotenv.config();


appBodegas.get('/:id?', (req, res) => {
    let sql = (req.params.id)
     ? [`SELECT * From bodegas WHERE id=${req.params.id}`] 
     : [`SELECT * FROM bodegas ORDER BY nombre`]
     con.query(...sql,
        (err, data, fils) =>{
            console.log(err)
            console.table(data);
            res.send(data);
        }
    )
})

appBodegas.post('/', (req, res)=>{
    con.query(
        `INSERT INTO bodegas SET ?`,
        req.body,
        (err, data, fils)=>{
            console.log(err);
            console.table(data);
            res.status(data.affectedRows+200).send(data)
        }
    )
})

appBodegas.put('/:id', (req, res)=>{
    con.query(
        `UPDATE bodegas SET ? WHERE id = ?`,
        [req.body, req.params.id],
        (err, data, fils) =>{
            console.log(err);
            res.send(data);
        }
    )
})

appBodegas.delete('/:id', (req, res)=>{
    con.query(
        `DELETE FROM bodegas WHERE ?`,
        req.params,
        (err, data, fils)=>{
            console.log(err);
            res.send(data);
        }
    )
})


export default appBodegas;