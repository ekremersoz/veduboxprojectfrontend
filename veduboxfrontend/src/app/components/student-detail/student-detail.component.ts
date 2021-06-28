import { Component, OnInit } from '@angular/core';
import { StudentDetail } from 'src/app/modules/studentDetail';
import { StudentDetailService } from 'src/app/services/student-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentDetail:StudentDetail[] =  [];
  dataLoaded:boolean = false;
  filterText ="";
  constructor(private studentDetailService:StudentDetailService , private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getStudentDetail();
  }

  getStudentDetail(){
    this.studentDetailService.getStudentDetail().subscribe(response=>{
      this.studentDetail = response.data;
      this.dataLoaded = true;
      this.toastrService.success("Öğrenci Detayları Listelendi");
    })
  }

}
