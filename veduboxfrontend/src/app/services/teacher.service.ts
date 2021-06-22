import { Injectable } from '@angular/core';
import { Teacher } from '../modules/teacher';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Course } from '../modules/course';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl = "https://localhost:44351/api/Teachers/GetAllTeachers"

  constructor(private httpClient:HttpClient) { }

  getTeacher():Observable<ListResponseModel<Teacher>>{
    return this.httpClient.get<ListResponseModel<Teacher>>(this.apiUrl);
  }
}
