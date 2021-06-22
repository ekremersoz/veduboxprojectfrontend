import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {path:"" ,pathMatch:"full", component:CourseComponent},
  {path:"courses" , component:CourseComponent},
  {path:"courses/teacher/:teacherId" , component:CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
