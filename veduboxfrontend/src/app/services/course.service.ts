import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../modules/course';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';
import { SingleResponseModel } from '../modules/singleResponseModel';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  
  apiUrl = apiUrl;

  constructor(private httpClient:HttpClient) { }

  
  getCourse():Observable<ListResponseModel<Course>>{
    let newPath = this.apiUrl+"Courses/GetAllCourse";
    return this.httpClient.get<ListResponseModel<Course>>(newPath);
    
  }

  getCourseById(courseId:number):Observable<SingleResponseModel<Course>>{
    let newPath = this.apiUrl+"Courses/GetCourseByCourseId?courseId="+courseId;
    return this.httpClient.get<SingleResponseModel<Course>>(newPath);
  }

  getCourseByTeacherId(teacherId:number):Observable<ListResponseModel<Course>>{
    let newPath = this.apiUrl+"Courses/GetAllCourseByTeacherId?teacherId="+teacherId
    return this.httpClient.get<ListResponseModel<Course>>(newPath);
  }

  addCourse(course:Course):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Courses/AddCourse",course)
  }
}
