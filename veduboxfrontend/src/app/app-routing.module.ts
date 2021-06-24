import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {path:"" ,pathMatch:"full", component:CourseComponent},
  {path:"courses" , component:CourseComponent},
  {path:"courses/teacher/:teacherId" , component:CourseComponent},
  {path:"course/Add" , component:CourseAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
