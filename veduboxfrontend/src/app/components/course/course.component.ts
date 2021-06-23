import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Course[] = [];
  dataLoaded:boolean = false;
  filterText="";


  constructor(private courseService:CourseService , private activatedRoute:ActivatedRoute , private toastrService:ToastrService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["teacherId"])
      {
        this.getCourseByTeacherId(params["teacherId"])
      }
      else
      {
        this.getCourse();
      }
    })
     
  }

  getCourse(){
    this.courseService.getCourse().subscribe(response=>{
      this.courses = response.data
      this.dataLoaded = true;
    })
  }


  getCourseByTeacherId(teacherId:number){
    this.courseService.getCourseByTeacherId(teacherId).subscribe(response=>{
      this.courses = response.data
      this.dataLoaded = true;
    })
  }
}
