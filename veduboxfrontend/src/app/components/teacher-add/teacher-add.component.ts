import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacherAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder , private teacherService:TeacherService , private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCourseAddForm();
  }

  createCourseAddForm(){
    this.teacherAddForm = this.formBuilder.group({
      teacherName:["",Validators.required],
      education:["", Validators.required]
    });


}

addTeacher(){
  if(this.teacherAddForm.valid)
  {
    let teacherModel = Object.assign({},this.teacherAddForm.value);
    this.teacherService.addTeacher(teacherModel).subscribe(response=>{
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
