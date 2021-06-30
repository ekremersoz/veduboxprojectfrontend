import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl,Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/modules/teacher';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {


  teachers:Teacher[]= [];
  courseAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder , private courseService:CourseService ,private toastrService:ToastrService , private teacherService:TeacherService) { }

  ngOnInit(): void {
    this.createCourseAddForm();
    this.getTeacher();
  }



  createCourseAddForm(){
    this.courseAddForm = this.formBuilder.group({
      teacherId:["",Validators.required],
      courseName:["",Validators.required],
      fee:["",Validators.required],
      startDate:["",Validators.required],
      finishDate:["",Validators.required]
    });
  }

  addCourse(){
    console.log(this.courseAddForm);
    if(this.courseAddForm.valid)
    {
      let courseModel = Object.assign({},this.courseAddForm.value);
      this.courseService.addCourse(courseModel).subscribe(response=>{
        this.toastrService.success(response.message);  
      },responseError=>{
        
        
        if(responseError.error.ValidationErrors.length>0){
          console.log(responseError.error.ValidationErrors);
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {            
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage , "Doğrulama Hatası");
          }          
        }
     });
       
    }else{
       this.toastrService.error("Formu Eksik Doldurdunuz");
    }
    
  }

  getTeacher(){
      this.teacherService.getTeacher().subscribe(response=>{
      this.teachers = response.data;
    })
  }

}
