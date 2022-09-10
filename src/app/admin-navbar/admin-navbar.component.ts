import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  title:string="";
  imgPath:string = "";
  isDiasbled:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = "String1";
    this.imgPath = "../../assets/829466_man_512x512.png"
    }

    clickMe(){
      alert('button clicked');
    }

}
