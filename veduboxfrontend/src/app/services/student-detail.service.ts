import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';
import { StudentDetail } from '../modules/studentDetail';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  apiUrl = apiUrl;
  constructor(private httpClient:HttpClient) { }

  getStudentDetail():Observable<ListResponseModel<StudentDetail>>{
    let newPath = this.apiUrl+"Students/GetAllStudentCourseDetail";
    return this.httpClient.get<ListResponseModel<StudentDetail>>(newPath);
  }



}
