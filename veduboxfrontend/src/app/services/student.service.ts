import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModel } from '../modules/responseModel';
import { Student } from '../modules/student';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = apiUrl;
  constructor(private httpClient:HttpClient) { }

  getStudent():Observable<ListResponseModel<Student>>{
    let newPath = this.apiUrl+"Students/GetAllStudent";
    return this.httpClient.get<ListResponseModel<Student>>(newPath);
  }

  addStudent(student:Student):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Students/AddStudent",student)
  }


}
