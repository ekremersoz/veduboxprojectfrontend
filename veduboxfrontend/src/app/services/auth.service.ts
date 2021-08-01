import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../modules/loginModel';
import { ResponseModel } from '../modules/responseModel';
import { SingleResponseModel } from '../modules/singleResponseModel';
import { TokenModel } from '../modules/tokenModel';
import { WebApiUrlAddress } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44351/api/Auths/"
  constructor(private httpClient : HttpClient) { }


  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Login",loginModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
