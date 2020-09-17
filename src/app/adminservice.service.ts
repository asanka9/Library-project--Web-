import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  public getLibraies(){
    return this.http.get("http://localhost:8080/admin/getLibrary");
  }


}


/*
  public doRegister(model,library){
    return this.http.post("http://localhost:8080/superUser/addLibraryAndUser/"+library,model);
  }
*/
