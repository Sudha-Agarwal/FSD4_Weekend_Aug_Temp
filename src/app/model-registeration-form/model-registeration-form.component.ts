import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-model-registeration-form',
  templateUrl: './model-registeration-form.component.html',
  styleUrls: ['./model-registeration-form.component.css']
})
export class ModelRegisterationFormComponent implements OnInit {

  emailPattern = '^[a-zA-z0-9._]+@[a-zA-z0-9.-]+\\.[a-z]{2,4}$';



  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, 
      Validators.pattern(this.emailPattern), this.emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    console.table(this.RegisterationForm.value);
    this.ds.createNewUser(this.RegisterationForm.value).subscribe({
      next: response=> console.log(response),
      error: err=>console.log(err),
      complete: ()=>console.log("complete")
    })
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;
    if(email && email.indexOf("@")!= -1){
      let[_, domain] = email.split("@");
      if(domain !== "gmail.com"){
        return {
          emailDomain:{
            parsedDomain:domain
          }
        }
      }      
    }
    return null;
  }

}
