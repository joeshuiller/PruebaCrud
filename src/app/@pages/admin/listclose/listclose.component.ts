import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-listclose',
  templateUrl: './listclose.component.html',
  styleUrls: ['./listclose.component.css']
})
export class ListcloseComponent implements OnInit {

  countries:any[]=[];
  id:string;
  users:any;
  list:any;
  constructor(private http:AdminService,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.getusers();
    
  }
  async getsolicitud(){
    (await this.http.verificaregistroced()).subscribe(
      (res)=>{
        console.log(res)
       this.list= res;
       this.list.forEach(element => {
         this.users.forEach(el => {
          if (element.idusers === el.id) {
            this.countries.push({
                id:element.id,
                valor: element.valor,
                state: element.state,
                date:element.date,
                datepago:element.datepago,
                active:element.active,
                nombre:el.nombre,
                apellidos:el.apellidos,
            })
          }
         });
       });
       console.log(this.countries)
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
  async getusers(){
    (await this.http.getcrudstotal()).subscribe(
      (res)=>{
       console.log(res);
        this.users = res
        this.getsolicitud()
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

}
