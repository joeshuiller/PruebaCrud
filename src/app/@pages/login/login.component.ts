import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import {Md5} from "md5-typescript";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    password: [
      {type: 'requerid', message: 'El Nombre es requerido'},
      {type: 'minLength', message: 'el Nombre debe contener minimo 5 caracteres'}
    ],
  };
  Form:FormGroup;
  constructor(
    private router: Router,
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
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
   }
   async registrarForm(item){
     console.log(Md5.init(item.password));
    this.alert.loading();
   (await this._http.login(item.correo, Md5.init(item.password))).subscribe(
     (res)=>{
      console.log(res);
       this.countries = res[0]
       if (this.countries.length !== 0) {
        setTimeout(() => {
          localStorage.setItem('id',this.countries.id);
          localStorage.setItem('token',this.countries.token);
          this.alert.messagefin();
          this.Form.reset();
          if (this.countries.tipo ===1) {
            this.router.navigate(['/home']);
          } else if (this.countries.tipo ===2) {
            this.router.navigate(['/admin']);
          }
          
        },5000);
          
       }else{
        this.alert.error("Error", "Usuario o contraseña invalida");
        //this.alert.messagefin();
       }
      
     }, 
     (error)=>{
      this.alert.error("Error", "Usuario o contraseña invalida");
      //this.alert.messagefin();
       console.log(error);
     }
   );
  }
}
