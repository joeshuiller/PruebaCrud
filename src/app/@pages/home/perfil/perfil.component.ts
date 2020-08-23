import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  id:string;
  countries1:any;
  constructor(private router: Router,
    private _http:LangService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    if (this.id !== '') {
      this.getusers(this.id);
    }
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
}
