import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-histarial',
  templateUrl: './histarial.component.html',
  styleUrls: ['./histarial.component.css']
})
export class HistarialComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  countries:any;
  id:string;
  constructor(private http:SolicitudService,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    if (this.id !=='') {
      this.getsolicitud(this.id)
    }
  }
  async getsolicitud(id){
    (await this.http.verificaregistro(id)).subscribe(
      (res)=>{
       console.log(res);
        this.countries = res
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
}
