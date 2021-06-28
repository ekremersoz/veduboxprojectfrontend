import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:Student[] = [];
  dataLoaded:boolean = false;
  filterText="";
  constructor(private studentService:StudentService , private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getStudent();
  }


  getStudent(){
    this.studentService.getStudent().subscribe(response=>{
      this.students = response.data;
      this.dataLoaded = true;
    })
  }


}
