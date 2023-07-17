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
export class Bodega {
    constructor(p1, p2, p3, p4) {
        this.ID = p1;
        this.NOMBRE = p2;
        this.ID_RESPONSABLE = p3;
        this.ESTADO = p4;
    }
}
__decorate([
    Expose({ name: "id" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "User dont be a dumb in the parameter 'id' it's Wrong" };
    }),
    __metadata("design:type", Number)
], Bodega.prototype, "ID", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parameter NOMBRE" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Bodega.prototype, "NOMBRE", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parameter ID_RESPONSE" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Bodega.prototype, "ID_RESPONSABLE", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parameter ESTADO" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Bodega.prototype, "ESTADO", void 0);
