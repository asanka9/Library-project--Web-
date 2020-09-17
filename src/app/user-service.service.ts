import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  headers : any;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('abc' + ':' + 'aaa') });

   }

  public addLibrary(userId,userPassword,model): Observable<any>{
    return this.http.post("http://localhost:8080/user/addLibraries/" + userId + "/" + userPassword, model);
  }

  public getListOfLibraries(libs): Observable<any>{
    return this.http.get("http://localhost:8080/user/returnLibs/"+libs);
  }

  public returnAllBooks(model): Observable<any>{
    return this.http.post("http://localhost:8080/user/returnOrderBooks",model);
  }

  //{userID}/{deleteLid}/{lids}/{uids}
  public deleteLibrary(userId,deletedId,lids,uids) :Observable<any>{
    return this.http.delete("http://localhost:8080/mobile/deleteLibrary/"+userId+"/"+deletedId+"/"+lids+"/"+uids);
  }

  public returnUserDetails(userId):Observable<any>{
    return this.http.get("http://localhost:8080/user/getUser/"+userId);
  }

}
