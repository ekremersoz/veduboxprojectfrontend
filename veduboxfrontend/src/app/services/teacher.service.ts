import { Injectable } from '@angular/core';
import { Teacher } from '../modules/teacher';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl = apiUrl;
  constructor(private httpClient:HttpClient) { }

  getTeacher():Observable<ListResponseModel<Teacher>>{
    return this.httpClient.get<ListResponseModel<Teacher>>(this.apiUrl+"Teachers/GetAllTeachers");
  }

  addTeacher(teacher:Teacher):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Teachers/AddTeacher",teacher)
  }
}
