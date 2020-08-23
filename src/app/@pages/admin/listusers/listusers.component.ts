import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  countries:any[]=[];
  id:string;
  users:any;
  list:any;
  constructor(private http:AdminService,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.getusers();
    
  }
  async getusers(){
    (await this.http.getcrudstotal()).subscribe(
      (res)=>{
       console.log(res);
        this.users = res
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }


}
