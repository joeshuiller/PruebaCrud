import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Md5} from "md5-typescript";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private registeresquest: ApiService) { }
  async create(inform){
    const data = {
      nombre: inform.nombre,
      apellidos: inform.apellidos,
      cedula: inform.cedula,
      direccion:inform.direccion,
      email:inform.correo,
      telefono:inform.telefono,
      tipo:1,
      password:Md5.init(inform.password),
      token:Md5.init(`${inform.nombre}${inform.correo}${inform.telefono}`)
    };
    return await this.registeresquest.POST('users', data)
  }
  async edituser(inform, id){
    const data = {
      nombre: inform.nombre,
      apellidos: inform.apellidos,
      direccion:inform.direccion,
      correo:inform.correo,
      telefono:inform.telefono
    };
    return await this.registeresquest.PUT(`cruds/${id}`, data)
  }
  async getcruds(id){
    return await this.registeresquest.GET(`users/${id}`)
  }
  async login(email, password){
    return await this.registeresquest.GET(`users?email=${email}&password=${password}`)
  }
  async verificaregistro(email){
    return await this.registeresquest.GET(`users?email=${email}`)
  }
  async verificaregistroced(){
    return await this.registeresquest.GET(`solicitud?active=1`)
  }
  async verificaregistrofinal(){
    return await this.registeresquest.GET(`solicitud?active=0&state=10`)
  }
  async verificaregistrotel(){
    return await this.registeresquest.GET(`solicitud?state=6`)
  }
  async verificavalidos(){
    return await this.registeresquest.GET(`solicitud?state=10`)
  }
  async getcrudstotal(){
    return await this.registeresquest.GET(`users`)
  }
  async deletecruds(id){
    return await this.registeresquest.DELETE(`users/${id}`)
  }
}
