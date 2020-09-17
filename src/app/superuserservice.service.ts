import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperuserserviceService {

  headers : any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('abc' + ':' + 'aaa') });

   }


  public createSuperUser(libraryId,model): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createSuperUser/"+libraryId,model);
  }

  public createUser(libraryId,model): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createUser/"+libraryId,model);
  }

  public updateUsers(model): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/updateUsers",model);
  }

  public returnAllBooks(libraryId){
    return this.http.get("http://localhost:8080/superUser/returnAllBooks/"+libraryId);
  }

  public searchBooks(libraryId,bookName,authorName): Observable<any>{
    return this.http.get("http://localhost:8080/superUser/searchBook/"+libraryId+"/"+bookName+"/"+authorName);
  }

  public returnBooksWithCategory(categoryName,libraryId):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/searchCategoryBook/"+categoryName+"/"+libraryId);
  }

  public createBook(categoryId,model):Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createBook/"+categoryId,model);
  }

  public updateBook(catid,model):Observable<any>{
    return this.http.put("http://localhost:8080/superUser/updateBook/"+catid,model);
  }

  public getUserDetails(id):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/userId/"+id);
  }

  public deleteBook(catId,model):Observable<any>{
    return this.http.post("http://localhost:8080/superUser/deleteBook/"+catId,model);
  }

  public updateLibrary(model): Observable<any>{
    return this.http.put("http://localhost:8080/superUser/updateLibrary",model);
  }

  public returnAllCategories(libraryid): Observable<any>{
    return this.http.get("http://localhost:8080/superUser/getCategories/"+libraryid);
  }

  public createCategory(model): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createCategory",model);
  }

  public updateCategory(categoryId,model){
    return this.http.put("http://localhost:8080/superUser/updateCategory/"+categoryId,model);
  }

  public returnBorrowedBooks(lib){
    return this.http.get("http://localhost:8080/superUser/returnBorrowedBooks/"+lib);
  }

  //getLLibraryDetails
  public getLLibraryDetails(id):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/getLLibraryDetails/"+id);
  }

 public borrowedBooks(lid,date,uid,bname):Observable<any>{
   return this.http.get("http://localhost:8080/superUser/borrowBook/"+lid+"/"+date+"/"+uid+"/"+bname);
 }

 public removeBookFromBorowedBook(lid,uid,name):Observable<any>{
   return this.http.delete("http://localhost:8080/superUser/removeFromBook/"+lid+"/"+uid+"/"+name);
 }

}



/*
  public doRegister(model,library){
    return this.http.post("http://localhost:8080/superUser/addLibraryAndUser/"+library,model);
  }
*/
