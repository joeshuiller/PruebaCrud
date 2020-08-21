import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private registeresquest: ApiService) { }
  async create(inform){
    const data = {
      nombre: inform.nombre,
      apellidos: inform.apellidos,
      direccion:inform.direccion,
      correo:inform.correo,
      telefono:inform.telefono
    };
    return await this.registeresquest.POST('cruds', data)
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
    return await this.registeresquest.GET(`cruds/${id}`)
  }
  async getcrudstotal(){
    return await this.registeresquest.GET(`cruds`)
  }
  async deletecruds(id){
    return await this.registeresquest.DELETE(`cruds/${id}`)
  }
}
