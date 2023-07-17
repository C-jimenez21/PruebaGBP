import { Type, Transform, Expose } from 'class-transformer'

// "nombre": "hola nuevo",
// "descripcion": "nuevo producto",
// "estado": 1,
// "created_by": 30,
// "update_by": 30,
// "created_at": "2022-06-03",
// "updated_at": "2022-06-03",
// "deleted_at": "2022-06-03",

let nombreReguex = /^[a-z A-Z]+$/
let numeroReguex = /^([0-9]+|Null)$/i;
let fechaReguex = /^([0-9]{4}-[0-9]{2}-[0-9]{2}|null)$/i;

export class Producto{
    @Expose({name:'nombre'})
    @Transform(({value})=>{
        let data = nombreReguex.test(value)
        if(value == null) return null

        if(data && typeof value ==='string'){
            return (value)
        }
        else{
            throw{status:401, message:'valor invalido en nombre :('}
        }
    })
    nombre:string;
    @Expose({name:'descripcion'})
    @Transform(({value})=>{
        let data = nombreReguex.test(value)
        if(value == null) return null
        if(data && typeof value ==='string'){
            return (value)
        }
        else{
            throw{status:401, message:'valor invalido en descripcion :('}
        }
    })
    descripcion:string;
    @Expose({name:'estado'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if (data && typeof value == 'number'){
            return Number(value)
        } 
        else{
            throw{status:401, message:'valor invalido en estado :('}
        }
    })
    estado:number;
    @Expose({name:'created_by'})
    @Transform(({value})=>{
        let data = numeroReguex.test(value)
        if(value == null) return null

        if (data && typeof value == 'number'){
            return Number(value)
        } 
        else{
            throw{status:401, message:'valor invalido en created_by :('}
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
            throw{status:401, message:'valor invalido en update_by :('}
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
            throw{status:401, message:'valor invalido en created_at :('}
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
            throw{status:401, message:'valor invalido en updated_at :('}
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
            throw{status:401, message:'valor invalido en deleted_at :('}
        }
    })
    deleted_at:Date;

    constructor(p1:string, p2:string, p3:number, p4:number, p5:number, p6:Date, p7:Date, p8:Date){
        this.nombre = p1
        this.descripcion = p2
        this.estado = p3
        this.created_by= p4
        this.update_by = p5
        this.created_at = p6
        this.updated_at = p7
        this.deleted_at = p8
    }
}