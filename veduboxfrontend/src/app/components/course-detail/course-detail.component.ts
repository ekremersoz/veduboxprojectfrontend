import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/services/course-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail } from 'src/app/modules/courseDetail';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseDetail: CourseDetail;

  constructor(private courseDetailService: CourseDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.GetCoruseDetailByCourseId(params["courseId"])
    })
  }

  GetCoruseDetailByCourseId(courseId: number) {
    this.courseDetailService.GetCoruseDetailByCourseId(courseId).subscribe(response => {
      this.courseDetail = response.data;
    })
  }



}
