import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  CourseDetail } from '../modules/courseDetail';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';
import { SingleResponseModel } from '../modules/singleResponseModel';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {

  apiUrl = apiUrl;

  constructor(private httpClient:HttpClient) { }

  GetCoruseDetailByCourseId(courseId:number):Observable<SingleResponseModel<CourseDetail>>{
    let newPath = this.apiUrl+"CourseDetails/GetCoruseDetailByCourseId?courseId="+courseId
    return this.httpClient.get<SingleResponseModel<CourseDetail>>(newPath);
  }

  GetAllCourseDetail():Observable<ListResponseModel<CourseDetail>>{
    let newPath = this.apiUrl+"CourseDetails/GetAllCourseDetail";
    return this.httpClient.get<ListResponseModel<CourseDetail>>(newPath);
  }


  addCourseDetail(courseDetail:CourseDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"CourseDetails/AddCourseDetail",courseDetail)
  }

  updateCourseDetail(courseDetail:CourseDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"CourseDetails/UpdateCourseDetail",courseDetail)
  }

}
