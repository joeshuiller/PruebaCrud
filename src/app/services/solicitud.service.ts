import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private registeresquest: ApiService) { }
  async create(inform, id){
    const data = {
      idusers: parseInt(id),
      valor: inform.calculo,
      state: inform.tope,
      date:inform.date,
      active:0,
    };
    return await this.registeresquest.POST('solicitud', data)
  }
  async edituser(inform, id){
    const data = {
      nombre: inform.nombre,
      apellidos: inform.apellidos,
      direccion:inform.direccion,
      correo:inform.correo,
      telefono:inform.telefono
    };
    return await this.registeresquest.PUT(`solicitud/${id}`, data)
  }
  async getcruds(id){
    return await this.registeresquest.GET(`solicitud/${id}`)
  }
  async verificaregistro(idusers){
    return await this.registeresquest.GET(`solicitud?idusers=${idusers}`)
  }
  async getcrudstotal(){
    return await this.registeresquest.GET(`solicitud`)
  }
  async deletecruds(id){
    return await this.registeresquest.DELETE(`users/${id}`)
  }
}
