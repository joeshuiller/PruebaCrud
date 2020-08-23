import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LangService } from 'src/app/services/lang.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validation: any;
  countries:any;
  countries1:any;
  countries2:any;
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
    password: [
      {type: 'requerid', message: 'El Nombre es requerido'},
      {type: 'minLength', message: 'el Nombre debe contener minimo 5 caracteres'}
    ],
    passwordreplay: [
      {type: 'requerid', message: 'El Nombre es requerido'},
      {type: 'minLength', message: 'el Nombre debe contener minimo 5 caracteres'}
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
      {type: 'requerid', message: 'El teléfono es requerido'},
      {type: 'pattern', message: 'El teléfono es solo numero'},
      {type: 'minLength', message: 'El teléfono debe contener minimo 5 caracteres'}
    ],
    cedula: [
      {type: 'requerid', message: 'La cédula es requerido'},
      {type: 'pattern', message: 'La cédula es solo numero'},
      {type: 'minLength', message: 'La cédula debe contener minimo 5 caracteres'}
    ]
  };
  Form:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private _http:LangService,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.inicial();
  }
  inicial(){
    this.Form = this.formBuilder.group({
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
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
        Validators.pattern(/^[1-9]\d{6,10}$/),
        Validators.minLength(5)
      ])),
      cedula: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^[1-9]\d{6,10}$/),
        Validators.minLength(5)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      passwordreplay: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
   }
   async registrarForm(item){
    console.log(item);
    this.alert.loading();
    (await this._http.verificaregistro(item.correo)).subscribe(
      (res)=>{
         this.countries = res;
         if (this.countries.length ===0) {
          this.cedula(item);
         } else {
          this.alert.error("El correo ya se encuentra segistrado", "Error"); 
         }
      }, 
      (error)=>{
       this.alert.messagefin();
        console.log(error);
      }
    );
  }
  async cedula(item){
    (await this._http.verificaregistroced(item.cedula)).subscribe(
      (res)=>{
         this.countries1 = res;
         if (this.countries1.length === 0) {
           this.telefono(item)
         } else {
          this.alert.error("El número de cedula ya se encuentra segistrado", "Error"); 
         }
      }, 
      (error)=>{
       this.alert.messagefin();
        console.log(error);
      }
    );
  }
  async telefono(item){
    (await this._http.verificaregistrotel(item.telefono)).subscribe(
      (res)=>{
         this.countries2 = res;
         if (this.countries2.length === 0) {
           this.preverificando(item)
         } else {
          this.alert.error("El número de cedula ya se encuentra segistrado", "Error"); 
         }
      }, 
      (error)=>{
       this.alert.messagefin();
        console.log(error);
      }
    );
  }
  async preverificando(item){
    (await this._http.create(item)).subscribe(
      (res)=>{
        this.alert.messagefin();
        this.Form.reset();
      }, 
      (error)=>{
       this.alert.messagefin();
        console.log(error);
      }
    );
  }

}
