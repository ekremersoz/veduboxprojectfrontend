import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { NaviComponent } from './components/navi/navi.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import {ToastrModule} from "ngx-toastr";
import { CourseAddComponent } from './components/course-add/course-add.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { CourseDetailAddComponent } from './components/course-detail-add/course-detail-add.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailUpdateComponent } from './components/course-detail-update/course-detail-update.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    NaviComponent,
    TeacherComponent,
    VatAddedPipe,
    FilterPipePipe,
    CourseAddComponent,
    TeacherAddComponent,
    StudentAddComponent,
    StudentDetailComponent,
    CourseDetailAddComponent,
    CourseDetailComponent,
    CourseDetailUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
