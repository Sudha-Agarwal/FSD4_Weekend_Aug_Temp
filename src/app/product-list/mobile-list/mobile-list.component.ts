import { Component, OnInit } from '@angular/core';
import { Mobiles } from 'src/app/mobiles';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  mobiles: Mobiles[];
  selectedMobile: Mobiles;

  constructor() { }

  ngOnInit(): void {

    this.mobiles = [ new Mobiles("1","Samsung",10000),
    new Mobiles("2", "Apple", 60000),
    new Mobiles("3", "Xiaomi", 20000)
    ]
  }

  showDetails(mobile){
    this.selectedMobile = Object.assign({},mobile);

  }

  updated(mobile:Mobiles){
    console.log(mobile);
    var mob = this.mobiles.find(element => element.sku == mobile.sku);
    Object.assign(mob, mobile);

    
  }

}
