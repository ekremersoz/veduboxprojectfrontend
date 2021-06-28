import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';
import { CourseDetail } from 'src/app/modules/courseDetail';
import { CourseDetailService } from 'src/app/services/course-detail.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  
  courseDetailControl: CourseDetail[] = [];
  courses: Course[] = [];
  dataLoaded: boolean = false;
  filterText = "";


  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private courseDetailService: CourseDetailService) { }

  ngOnInit(): void {

    this.GetAllCourseDetail();

    this.activatedRoute.params.subscribe(params => {
      if (params["teacherId"]) {
        this.getCourseByTeacherId(params["teacherId"])
      }
      else {
        this.getCourse();
      }
    })

  }

  getCourse() {
    this.courseService.getCourse().subscribe(response => {
      this.courses = response.data
      this.dataLoaded = true;
      this.toastrService.success("Kurslar Listelendi")
    })
  }


  getCourseByTeacherId(teacherId: number) {
    this.courseService.getCourseByTeacherId(teacherId).subscribe(response => {
      this.courses = response.data
      this.dataLoaded = true;
    })
  }

  GetAllCourseDetail() {
    this.courseDetailService.GetAllCourseDetail().subscribe(response => {
      this.courseDetailControl = response.data;
    })
  }


  




}
