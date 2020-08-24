import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  active:boolean;
  datoComunicar: string;
  datoComunicarPadre: any;
  counter:number = 0;
  countries:any;
  verificar:any;
  id:string;
  cupodisponible: number= 100000
  aprobado:number = 0;
  virificar:any;
  constructor(private http:SolicitudService,
    private alert: AlertService,) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.getactivo();
  }
  realizarComunicacion(dato: string) {
    this.datoComunicar = dato;
  }
  valueChanged(){
    this.counter = this.counter + 1;
    console.log(this.counter)
    this.valueChange.emit(this.counter);
  }
  realizaComunicacionHijo(event) {
    console.log(event)
    this.datoComunicarPadre = event.elemento;
    this.aprobado = this.datoComunicarPadre.calculo;
    
    if (this.id !== null || this.id !== '') {
      console.log(this.id)
      this.getsolicitud(this.id);
    }
    console.log(event)
  }
  async getsolicitud(id){
    (await this.http.verificaregistro(id)).subscribe(
      (res)=>{
       console.log(res);
        this.countries = res
        console.log(this.countries.length)
        if (this.countries.length === 0) {
            this.create(this.datoComunicarPadre);
        }else{
          if (this.countries[0].state === 6) {
            this.active=false;
            const data ={
              calculo: this.datoComunicarPadre.calculo,
              date: this.datoComunicarPadre.date,
              tope: 6,
              aprobado: this.datoComunicarPadre.aprobado,
            }
            this.create(this.datoComunicarPadre);
          } else {
            const data ={
              calculo: this.datoComunicarPadre.calculo,
              date: this.datoComunicarPadre.date,
              tope: 10,
              aprobado: this.datoComunicarPadre.aprobado,
            }
            this.create(data);
          }
        }
       
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
  async create(item){
    (await this.http.create(item, this.id)).subscribe(
      (res)=>{
       console.log(res);
        this.verificar = res
        if (this.verificar.state === 6) {
            this.active=false;
            this.alert.error("Lo sentimos!","Lo sentimo tu credito no ha sido aprobado")
        }else{
            this.aprobado = item.aprobado;
            this.active=true;
            this.alert.success("Felicitaciones!","Tu credito  ha sido aprobado")
        }
       
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
  async pagarcredito(item){
    this.alert.loading();
    (await this.http.edituser(this.virificar[0], this.virificar[0].id)).subscribe(
      (res)=>{
       console.log(res);
       this.getactivo();
        this.countries = res
        this.alert.success("Felicitaciones!","Tu credito  ha sido cancelado con exito")
      }, 
      (error)=>{
        this.alert.error("Lo sentimos!","Lo sentimo tu credito no ha sido cancelado")
        console.log(error);
      }
    );
  }
  async getactivo(){
    (await this.http.verificaregistrofinal()).subscribe(
      (res)=>{
       console.log(res);
        this.virificar = res
        if (this.virificar.length === 0) {
          this.active = false
          this.aprobado = 0
        } else {
          this.aprobado = this.virificar[0].aprobado
          this.active = true
        }
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
}
