import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/modules/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers:Teacher[] = [];
  currentTeacher:Teacher | null;
  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher(){
    this.teacherService.getTeacher().subscribe(response =>{
      this.teachers = response.data
    })
  } 

  setCurrentTeacher(teacher :Teacher){
    this.currentTeacher = teacher;
  }

  setNullCurrentTeacher(){
    this.currentTeacher = null;
    
  }

  getCurrentTeacherClass(teacher:Teacher){
    if(teacher == this.currentTeacher)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item"
    }
    
  }

  getAllTeacherClass(){
    if(!this.currentTeacher)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item"
    }
    
  }

}
