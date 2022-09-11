import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mobiles } from 'src/app/mobiles';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {
  @Input() mobile:Mobiles;
  @Output() mobileChange:EventEmitter<Mobiles> = new EventEmitter<Mobiles>();


  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.mobileChange.emit(this.mobile)

  }

}
