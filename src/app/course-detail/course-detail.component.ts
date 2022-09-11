import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
id;
course: Course;
  constructor(private route:ActivatedRoute, private ds:DataServiceService) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ds.getCourseDetailsById(this.id).subscribe(
      {
        next: response => this.course = response,
        error: err=> console.error(err),
        complete: () => console.log("complete")
      }
    )
  }

}
