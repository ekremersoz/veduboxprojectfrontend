import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl,Validators } from '@angular/forms';
import { CourseDetailService } from 'src/app/services/course-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CourseDetail } from 'src/app/modules/courseDetail';
import { ActivatedRoute ,  Router  } from '@angular/router';

@Component({
  selector: 'app-course-detail-add',
  templateUrl: './course-detail-add.component.html',
  styleUrls: ['./course-detail-add.component.css']
})
export class CourseDetailAddComponent implements OnInit {

 

  courseId: number = 0;
  courseDetail:CourseDetail[] = [];
  courseDetailAddForm:FormGroup;
  constructor( private activatedRoute:ActivatedRoute ,private formBuilder:FormBuilder , private courseDetailService:CourseDetailService , private toastrService:ToastrService) { }

  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe(params => {
     
        this.getCoutseId(params["courseId"])
        this.createCourseDetailAddForm();
    })


    

  
  }


  createCourseDetailAddForm(){
    this.courseDetailAddForm = this.formBuilder.group({
      courseId:[Number(this.courseId),Validators.required],
      courseHeader:["",Validators.required],
      courseCurriculum:["",Validators.required],
      courseDescription:["",Validators.required]
    });
  }


  addCourseDetail(){
    console.log(this.courseDetailAddForm);
    if(this.courseDetailAddForm.valid)
    {
      let courseModel = Object.assign({},this.courseDetailAddForm.value);
      this.courseDetailService.addCourseDetail(courseModel).subscribe(response=>{
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


  getCoutseId(courseId: number) {
    this.courseId = courseId;
  }


}
