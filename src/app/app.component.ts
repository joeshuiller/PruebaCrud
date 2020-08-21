import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebacrudfinal';
  validation: any;
  countries:any;
  closeResult = '';
  tipomodal:number;
  titulo:string;
  id:number;
  butom:string;
  valdation_messages = {
    correo: [
      {type: 'requerid', message: 'El Correo es requerido'},
      {type: 'pattern', message: 'ojo! este no es un Correo válido'}
    ],
    nombre: [
      {type: 'requerid', message: 'El Nombre es requerido'},
      {type: 'minLength', message: 'el Nombre debe contener minimo 5 caracteres'}
    ],
    apellidos: [
      {type: 'requerid', message: 'El apellido es requerido'},
      {type: 'minLength', message: 'El apellido debe contener minimo 5 caracteres'}
    ],
    direccion: [
      {type: 'requerid', message: 'La dirección es requerido'},
      {type: 'minLength', message: 'La dirección debe contener minimo 5 caracteres'}
    ],
    telefono: [
      {type: 'requerid', message: 'El telefono es requerido'},
      {type: 'minLength', message: 'El telefono debe contener minimo 5 caracteres'}
    ]
  };
  Form:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private _http:LangService,
  ) {
    this.inicial()
   }
   inicial(){
    this.Form = this.formBuilder.group({
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      apellidos: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      direccion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
    this.getcruds();
   }
   async getcruds(){
    (await this._http.getcrudstotal()).subscribe(
      (res)=>{
        this.countries =res;
      }, 
      (error)=>{
        console.log(error);
      }
    );
   }
   async registrarForm(item){
     console.log(item);
    (await this._http.create(item)).subscribe(
      (res)=>{
        this.getcruds();
        this.Form.reset();
      }, 
      (error)=>{
        console.log(error);
      }
    );
   }
   tipo(Item:any){
     if (Item === null || Item === undefined) {
      this.tipomodal = 1;
      this.Form.reset();
      this.butom = "Guardar"
      this.titulo = "Registrar Nuevo Cruds" ;
     }else{
      this.tipomodal = 2;
      this.id = Item.id;
      this.titulo = "Editar Cruds" ;
      this.butom = "Editar"
      this.Form.controls.correo.setValue(Item.correo);
      this.Form.controls.nombre.setValue(Item.nombre);
      this.Form.controls.apellidos.setValue(Item.apellidos);
      this.Form.controls.direccion.setValue(Item.direccion);
      this.Form.controls.telefono.setValue(Item.telefono);
     }
    
    
   }
   async deletefinal(id){
    (await this._http.deletecruds(id)).subscribe(
      (res)=>{
        this.getcruds();
      }, 
      (error)=>{
        console.log(error);
      }
    );
   }
   async editForm(item, id){
     if (this.id !== id) {
       alert('error')
     }else{
      (await this._http.edituser(item, id)).subscribe(
        (res)=>{
          this.getcruds();
          this.Form.reset();
        }, 
        (error)=>{
          console.log(error);
        }
      );
     }
   }
}
