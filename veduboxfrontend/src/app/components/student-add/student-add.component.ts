import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  course:Course[] = [];
  studentAddForm: FormGroup
  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private toastrService: ToastrService , private courseService : CourseService) { }

  ngOnInit(): void {
    this.createStudentAddForm();
    this.getCourse();
  }


  createStudentAddForm() {
    this.studentAddForm = this.formBuilder.group({
      studentName: ["", Validators.required],
      email: ["", Validators.required],
      courseId: ["", Validators.required]
    });
  }


  addStudent(){
    if(this.studentAddForm.valid)
    {
      let teacherModel = Object.assign({},this.studentAddForm.value);
      this.studentService.addStudent(teacherModel).subscribe(response=>{
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

  getCourse(){
    this.courseService.getCourse().subscribe(response=>{
      this.course = response.data;
    })
  }

}
