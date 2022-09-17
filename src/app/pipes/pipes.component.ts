import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  convertText= "text to be converted by pipe";

  birthday = new Date(2022,0,1);

  itemPrice = 5.20;

  num = .25;

  get format(){
    return 'fullDate';
  }

  usersList$:Observable<any[]>;
  searchText;

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {

    this.usersList$ = this.ds.getDataForPipe();

    
  }

}
