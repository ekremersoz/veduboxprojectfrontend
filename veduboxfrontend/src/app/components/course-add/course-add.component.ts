import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl,Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {


  courseAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder , private courseService:CourseService ,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCourseAddForm();
  }



  createCourseAddForm(){
    this.courseAddForm = this.formBuilder.group({
      teacherId:["",Validators.required],
      courseName:["",Validators.required],
      fee:["0",Validators.required],
      startDate:["",Validators.required],
      finishDate:["",Validators.required]
    });
  }

  addCourse(){
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

}
