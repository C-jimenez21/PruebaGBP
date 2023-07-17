var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from 'class-transformer';
// "nombre": "hola nuevo",
// "descripcion": "nuevo producto",
// "estado": 1,
// "created_by": 30,
// "update_by": 30,
// "created_at": "2022-06-03",
// "updated_at": "2022-06-03",
// "deleted_at": "2022-06-03",
let nombreReguex = /^[a-z A-Z]+$/;
let numeroReguex = /^([0-9]+|Null)$/i;
let fechaReguex = /^([0-9]{4}-[0-9]{2}-[0-9]{2}|null)$/i;
export class Producto {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        this.nombre = p1;
        this.descripcion = p2;
        this.estado = p3;
        this.created_by = p4;
        this.update_by = p5;
        this.created_at = p6;
        this.updated_at = p7;
        this.deleted_at = p8;
    }
}
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        let data = nombreReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value === 'string') {
            return (value);
        }
        else {
            throw { status: 401, message: 'valor invalido en nombre :(' };
        }
    }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        let data = nombreReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value === 'string') {
            return (value);
        }
        else {
            throw { status: 401, message: 'valor invalido en descripcion :(' };
        }
    }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value == 'number') {
            return Number(value);
        }
        else {
            throw { status: 401, message: 'valor invalido en estado :(' };
        }
    }),
    __metadata("design:type", Number)
], Producto.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value == 'number') {
            return Number(value);
        }
        else {
            throw { status: 401, message: 'valor invalido en created_by :(' };
        }
    }),
    __metadata("design:type", Number)
], Producto.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value == 'number') {
            return Number(value);
        }
        else {
            throw { status: 401, message: 'valor invalido en update_by :(' };
        }
    }),
    __metadata("design:type", Number)
], Producto.prototype, "update_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value === 'string') {
            return (value);
        }
        else {
            throw { status: 401, message: 'valor invalido en created_at :(' };
        }
    }),
    __metadata("design:type", Date)
], Producto.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value === 'string') {
            return (value);
        }
        else {
            throw { status: 401, message: 'valor invalido en updated_at :(' };
        }
    }),
    __metadata("design:type", Date)
], Producto.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (value == null)
            return null;
        if (data && typeof value === 'string') {
            return (value);
        }
        else {
            throw { status: 401, message: 'valor invalido en deleted_at :(' };
        }
    }),
    __metadata("design:type", Date)
], Producto.prototype, "deleted_at", void 0);
