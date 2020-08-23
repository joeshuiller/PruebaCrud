import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  id:string;
  constructor() {
    this.id = localStorage.getItem('id');
   }

  displayCounter(count) {
    console.log(count);
  }

}
