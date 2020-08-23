import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  @Output() eventoComunicar = new EventEmitter();
  @Input() active: boolean;
  interes:number = 2;
  seguro:number = 674;
  admin:number = 16000;
  tecnolo:number = 30000;
  valor:number=0;
  intervalo
  valdation_messages = {
    calulo: [
      {type: 'requerid', message: 'El valor es requerido'},
    ],
    fecha: [
      {type: 'requerid', message: 'El Nombre es requerido'},
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
      valor: new FormControl('', Validators.compose([
      ])),
      calulo: new FormControl(0, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      fecha: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
   }
  realizarComunicacion(dato: any){
    this.eventoComunicar.emit({elemento: dato});
  }
  registrarForm(item){
    this.alert.loading();
    this.intervalo = setInterval(() => { this.randomfinal(item); }, 1000);
  }
  randomfinal(item) {
    const tope =  Math.round(Math.random() * (10 - 1) + 1);
    if (tope === 10) {
      this.valor = item.calulo
      const suma = this.valor+(this.seguro+this.admin +this.tecnolo+((this.valor*19)/100) + ((this.valor*this.interes)/100))
      const data = {
        calculo: suma,
        aprobado: item.calulo,
        date: item.fecha,
        tope: tope
       }
       this.alert.messagefin()
      clearInterval(this.intervalo);
      this.realizarComunicacion(data);
    }else if (tope === 6) {
      this.valor = item.calulo;
      const suma = (this.valor+this.seguro+this.admin +this.tecnolo+((this.valor*19)/100) + ((this.valor*this.interes)/100))
      const data = {
        calculo: suma,
        date: item.fecha,
        aprobado: item.calulo,
        tope: tope
      }
      this.alert.messagefin()
      clearInterval(this.intervalo);
      this.realizarComunicacion(data);
    }
    
  }
}
