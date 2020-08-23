import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-listuactive',
  templateUrl: './listuactive.component.html',
  styleUrls: ['./listuactive.component.css']
})
export class ListuactiveComponent implements OnInit {

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
      (await this.http.verificaregistrofinal()).subscribe(
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
