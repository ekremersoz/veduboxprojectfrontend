import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseDetailAddComponent } from './components/course-detail-add/course-detail-add.component';
import { CourseDetailUpdateComponent } from './components/course-detail-update/course-detail-update.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseComponent } from './components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"" ,pathMatch:"full", component:CourseComponent},
  {path:"courses" , component:CourseComponent},
  {path:"courses/teacher/:teacherId" , component:CourseComponent},
  {path:"Course/Add" , component:CourseAddComponent /** , canActivate:[LoginGuard]*/},
  {path:"Teacher/Add" , component:TeacherAddComponent},
  {path:"students", component:StudentComponent},
  {path:"Student/Add",component:StudentAddComponent},
  {path:"StudentsDetail", component:StudentDetailComponent},
  {path:"CourseDetailAdd",component:CourseDetailAddComponent},
  {path:"CourseDetail" , component:CourseDetailComponent},
  {path:"CourseDetails/GetCoruseDetailByCourseId/:courseId" , component:CourseDetailComponent},
  {path:"CourseDetail/Add/:courseId",component:CourseDetailAddComponent},
  {path:"CourseDetail/Update/:courseId", component:CourseDetailUpdateComponent},
  {path:"Login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
