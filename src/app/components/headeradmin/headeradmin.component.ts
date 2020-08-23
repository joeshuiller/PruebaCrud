import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {
  @Input() id: string;
  countries1:any;
  calarray:any;
  calculo:number = 0;
  capital = environment.capital
  constructor(
    private router: Router,
    private _http:AdminService
  ) { }

  ngOnInit(): void {
    this.getactivos();
    this.getusers(this.id);
  }
  cerrar(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
  async getusers(id){
    (await this._http.getcruds(id)).subscribe(
      (res)=>{
         this.countries1 = res;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
  async getactivos(){
    (await this._http.verificavalidos()).subscribe(
      (res)=>{
         this.calarray = res;
         this.calarray.forEach(element => {
           this.calculo =this.calculo+element.valor
         });
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }

}
