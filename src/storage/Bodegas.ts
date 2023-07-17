import {Type, Transform, Expose} from 'class-transformer' 

export class Bodega{
    @Expose({name:"id"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number") return Number(value);
        else throw {status: 401, message: "User dont be a dumb in the parameter 'id' it's Wrong"}
    })
    ID:number

    @Expose({name:"nombre"}) 
    @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parameter NOMBRE"}},{toClassOnly:true})
    NOMBRE:string

    @Expose({name:"id_responsable"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ID_RESPONSE"}},{toClassOnly:true})
    ID_RESPONSABLE:number

    @Expose({name:"estado"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parameter ESTADO"}},{toClassOnly:true})
    ESTADO:Number

    constructor(p1:number, p2:string, p3:number, p4:Number){
        this.ID = p1;
        this.NOMBRE = p2;
        this.ID_RESPONSABLE = p3;
        this.ESTADO = p4;
    }
}