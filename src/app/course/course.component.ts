import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:Course[];
  imgPath:string = "../../assets/829466_man_512x512.png"


  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
    this.ds.getCourse().subscribe({
      next: response => this.courses = response,
      error: err => console.log(err),
      complete: () => console.log("complete")
    })
  }

}
