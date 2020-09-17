import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryRegisterService {


  constructor(private http:HttpClient) {

  }

  public doRegister(model,library){
    return this.http.post("http://localhost:8080/superUser/addLibraryAndUser/"+library,model);
  }

  public numOfUsers(){

    return this.http.get("http://localhost:8080/home/numOfUsers");
  }

  public numOfLibraries(){
    return this.http.get("http://localhost:8080/home/numOfLibraries");
  }

  public  loginUser(email,password){
    return this.http.get("http://localhost:8080/home/login/"+email+"/"+password);
  }

  public getLibraryName(lid){
    return this.http.get("http://localhost:8080/user/getLibraryName/"+lid,{responseType:'text' as 'json'});
  }

  public createExternalUser(model): Observable<any>{
    return this.http.post("http://localhost:8080/home/externalUserCreate",model);
  }
}
