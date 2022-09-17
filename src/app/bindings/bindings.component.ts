import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  isBold:boolean = true;
  classesToApply = "boldClass italicsClass";

  titleStyle = 'green';

  title_exist:boolean = false;

  TitleStyles = {
    'color': 'blue',
    'font-size' : '4em'
  }
  constructor() { }

  ngOnInit(): void {
  }

  get AddCSSClasses(){
    let CssClasses = {
      boldClass: true,
      italicsClass:false
    }

    return CssClasses;
  }

}
