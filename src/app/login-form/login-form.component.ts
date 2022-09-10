import { Component, OnInit } from '@angular/core';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
user = {email:'', password:''};

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.ds.checkLogin(this.user).subscribe(response =>console.log(response));
  }

}
