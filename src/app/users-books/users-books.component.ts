import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NavComponent} from '../nav/nav.component';
import { SuperuserserviceService } from '../superuserservice.service';
import { UserModel } from '../UserModel';
import { CategoryModel } from '../CategoryModel';
import { BookModel } from '../BookModel';
import { LibraryModel } from '../LibraryModel';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-users-books',
  templateUrl: './users-books.component.html',
  styleUrls: ['./users-books.component.scss']
})
export class UsersBooksComponent implements OnInit {

  showSearch : boolean;

  categoryModel : CategoryModel;
  createdCategoryModel : CategoryModel;

  role : String;
  uModel : UserModel;
  showEditable : boolean;
  clickOnCategory : boolean;
  clickOnSearch : boolean;
  showBackBuuton : boolean;
  clickOnUpdate: boolean;


  showModal : boolean;
  showCategoryModal : boolean;

  bookModel :BookModel;
  searchBookModel :BookModel;

  bookName : String;
  authorName : String;

  errorWithCreateCategory : boolean;
  errorWithCreateBook:boolean;
  successWithBookCreate : boolean;
  createdBookModel = new BookModel(null,null,null,null,null,null,null,null,null);
  currentCategoryName : String;
  successBookName : String;
  errorBookName : String;

  //external user checking
  isExternalUser : boolean;
  externalSelectedLib : any;
  listOfLibraries : LibraryModel;
  externalUserModel : any;
  numbers;

  checkNewExternalUser : boolean;


  constructor(private router:Router,private route:ActivatedRoute,private service:SuperuserserviceService,private uservice:UserServiceService) {

  }

  selectLibrary(){


    let resp1=this.service.returnAllCategories(this.externalUserModel.lid.split(" ")[this.externalSelectedLib]);
    this.externalSelectedLib = this.externalUserModel.lid.split(" ")[this.externalSelectedLib]
    console.log("$$$$$$$$$$$$$$   "+this.externalUserModel.lid.split(" ")[this.externalSelectedLib]+"  %%%%%%%%%%%")
    resp1.subscribe(
      (data)=>{
        this.categoryModel = data;

      }
    );


  }


  ngOnInit(): void {

    this.externalSelectedLib = 0;

    this.numbers = [12,434,34,656,5656,6,565,65,6,56,56];

    this.errorWithCreateCategory = false;
    this.clickOnCategory = false;
    this.clickOnSearch = false;
    this.showBackBuuton = false;
    this.showEditable = false;
    this.clickOnUpdate = false;
    this.showModal = false;
    this.errorWithCreateBook = false;
    this.successWithBookCreate = false;
    this.showCategoryModal = false;
    this.createdCategoryModel = new CategoryModel(null,null,null,null,null);
    this.checkNewExternalUser = false;





    this.uModel=NavComponent.model;
    this.externalSelectedLib = this.uModel.lid.split(" ")[0];
    this.role = this.uModel.role;
    if (this.role=='SUPERUSER') {
      this.showEditable=true;
      this.isExternalUser = false;
      let resp=this.service.returnAllCategories(this.uModel.lid);
      resp.subscribe(
        (data)=>{
          this.categoryModel = data;

        }
      );
    } else {
      this.showEditable=false;
      this.isExternalUser = true;
      let red = this.uservice.returnUserDetails(NavComponent.model.id);
      red.subscribe(
        (data)=>{
          this.externalUserModel = data;

          if (this.externalUserModel.lid==null) {
            this.checkNewExternalUser = true;
          }
          let resp = this.uservice.getListOfLibraries(this.externalUserModel.lid);
          resp.subscribe(
            (data)=>{
              this.listOfLibraries=data;
            }
          );

          if (this.externalUserModel.lid!=null) {
            let resp1=this.service.returnAllCategories(this.externalUserModel.lid.split(" ")[1]);
            resp1.subscribe(
              (data)=>{
                this.categoryModel = data;
                console.log('Hellooo  '+this.externalUserModel.lid.split+"Hiiiii");
                console.log(data);
                console.log('Heeeeeeeeeeeee');
              }
            );
          }
        }
      );

    }

    this.showSearch = true;




  }

  ClickOnCategory(a){
    this.showSearch = false;
    this.clickOnSearch = false;
    this.clickOnCategory=true;
    this.showBackBuuton = true;
    this.currentCategoryName=a;
    let resp;
    if (this.uModel.role=='SUPERUSER') {
      resp=this.service.returnBooksWithCategory(a,this.uModel.lid);
    } else {
      console.log("$$$$$$$$$$$$$$     "+this.externalSelectedLib +"  $$$$$$$$$$$$$$$$$$$$")
      resp=this.service.returnBooksWithCategory(a,this.externalSelectedLib);
    }

    resp.subscribe(
      (data)=>{
        console.log(data);
        this.bookModel = data;
      }
    );
  }

clickOnSearchButton(){
    ///this.router.navigate(['search'],{relativeTo:this.route});
    this.clickOnSearch = true;
    this.clickOnCategory=false;
    this.showBackBuuton = true;
    if (this.bookName=="") {
      let resp;
      if (this.uModel.role=='SUPERUSER') {
        resp=this.service.searchBooks(this.uModel.lid,'undefined',this.authorName);
      } else {
        resp=this.service.searchBooks(this.externalSelectedLib,'undefined',this.authorName);
      }
      resp.subscribe(
        (data)=>{
          this.searchBookModel = data;
        }
      );
    }else if (this.authorName=="") {
      let resp;
      if (this.uModel.role=='SUPERUSER') {
        resp=this.service.searchBooks(this.uModel.lid,this.bookName,'undefined');
      } else {
        resp=this.service.searchBooks(this.externalSelectedLib,this.bookName,'undefined');
      }
      resp.subscribe(
        (data)=>{
          this.searchBookModel = data;
        }
      );
    }else if(!(this.authorName=="" && this.authorName=="")){
      let resp;
      if (this.uModel.role=='SUPERUSER') {
        resp =this.service.searchBooks(this.uModel.lid,this.bookName,this.authorName);
      } else {
        resp =this.service.searchBooks(this.externalSelectedLib,this.bookName,this.authorName);
      }
      resp.subscribe(
        (data)=>{
          this.searchBookModel = data;
        }
      );
    }




  }

goMainMenu(){
    this.clickOnSearch = false;
    this.clickOnCategory=false;
    this.showBackBuuton = false;
    console.log('Hellloooo');
  }

clickOnUpdateButton(){
    this.clickOnUpdate = ! this.clickOnUpdate;
    console.log(this.clickOnUpdate);
  }

clickOnSaveButton(model){
    let resp=this.service.updateBook(this.currentCategoryName,model);
    resp.subscribe(
     (data)=>this.bookModel=data,
     (error)=>{console.log('sdsdsd');
      //add a alert box also for this one
    }
    );
  }

clickOnDeleteButton(model){
    let reponse = this.service.deleteBook(this.currentCategoryName,model);
    reponse.subscribe(
      (data)=>this.bookModel=data
    )

  }

createBook(){
    this.createdBookModel.libraryid= this.uModel.lid;
    this.createdBookModel.categoryid=this.currentCategoryName;
    let reponse=this.service.createBook(this.currentCategoryName,this.createdBookModel);
    reponse.subscribe(
      (data)=>{
        this.successWithBookCreate=true;
        this.errorWithCreateBook=false;
        this.bookModel=data;
        this.successBookName=data.name;
        this.showModal=false
      },
      (error)=>{
        this.errorWithCreateBook=true;
        this.successWithBookCreate=false;
      }
    );
  }

  createNewCategory(){
    this.showCategoryModal = true;
    this.createdCategoryModel.libraryid = NavComponent.model.lid;
    let response = this.service.createCategory(this.createdCategoryModel);
    response.subscribe(
      (data)=>{
        this.categoryModel = data;
        this.showCategoryModal=false
        this.errorWithCreateCategory = false;
      },
      (error)=>{
        this.errorWithCreateCategory = true;
      }
      );
  }



}
