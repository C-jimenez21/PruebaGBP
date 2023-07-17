import { Type, Transform, Expose } from 'class-transformer'

// id_producto,
// id_bodega,
// cantidad,
// created_at,
// updated_at,
// deleted_at

let numeroReguex = /^([0-9]+|Null)$/i;
let fechaReguex = /^([0-9]{4}-[0-9]{2}-[0-9]{2}|null)$/i;

export class Inventario{
    @Expose({name:'id_producto'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if(data && typeof value ==='number'){
            return Number(value)
        }
        else{
            throw{status:401, message:'valor invalido en id_producto'}
        }
    })
    id_producto:number;
    @Expose({name:'id_bodega'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null
        if(data && typeof value ==='number'){
            return Number(value)
        }
        else{
            throw{status:401, message:'valor invalido en id_bodega '}
        }
    })
    id_bodega:number;
    @Expose({name:'cantidad'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if (data && typeof value == 'number'){
            return Number(value)
        } 
        else{
            throw{status:401, message:'valor invalido en cantidad'}
        }
    })
    cantidad:number;
    @Expose({name:'created_by'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if (data && typeof value == 'number'){
            return Number(value)
        } 
        else{
            throw{status:401, message:'valor invalido en created_by '}
        }
    })
    created_by:number;
    @Expose({name:'update_by'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if (data && typeof value == 'number'){
            return Number(value)
        } 
        else{
            throw{status:401, message:'valor invalido en update_by'}
        }
    })
    update_by:number;
    @Expose({name:'created_at'})
    @Transform(({value})=>{
        let data = fechaReguex.test(value)
        if(value == null) return null

        if(data && typeof value ==='string'){
            return (value)
        }
        else{
            throw{status:401, message:'valor invalido en created_at '}
        }
    })
    created_at:Date;
    @Expose({name:'updated_at'})
    @Transform(({value})=>{
        let data = fechaReguex.test(value)
        if(value == null) return null

        if(data && typeof value ==='string'){
            return(value)
        }
        else{
            throw{status:401, message:'valor invalido en updated_at '}
        }
    })
    updated_at:Date;
    @Expose({name:'deleted_at'})
    @Transform(({value})=>{
        let data = fechaReguex.test(value)
        if(value == null) return null

        if(data && typeof value ==='string'){
            return (value)
        }
        else{
            throw{status:401, message:'valor invalido en deleted_at '}
        }
    })
    deleted_at:Date;

    constructor(p1:number, p2:number, p3:number, p4:number, p5:number, p6:Date, p7:Date, p8:Date){
        this.id_producto = p1
        this.id_bodega = p2
        this.cantidad = p3
        this.created_by= p4
        this.update_by = p5
        this.created_at = p6
        this.updated_at = p7
        this.deleted_at = p8
    }
}