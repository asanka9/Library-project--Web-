import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import {UsersBooksComponent} from '../users-books/users-books.component';
import {NavComponent} from '../nav/nav.component';
import { SuperuserserviceService } from '../superuserservice.service';
import { UserModel } from '../UserModel';
import { BookModel } from '../BookModel';

@Component({
  selector: 'app-superuser-book-category',
  templateUrl: './superuser-book-category.component.html',
  styleUrls: ['./superuser-book-category.component.scss']
})
export class SuperuserBookCategoryComponent implements OnInit {

  showGrid : boolean;
  categoryName : String;
  bookModel : BookModel;
  numbers=[12,3,34,34,34];
  role : String;
  uModel : UserModel;
  showEditable : boolean;
  constructor(private router:Router,private route:ActivatedRoute,private  service:SuperuserserviceService) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ');
   }

  ngOnInit(): void {



    this.uModel=NavComponent.model;
    this.role = this.uModel.role;
    if (this.role=='SUPERUSER') {
      this.showEditable=true;
    } else {
      this.showEditable=false;
    }
    this.showGrid= true;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.categoryName = params.get('name');
    });



    let resp=this.service.returnBooksWithCategory(this.categoryName,this.uModel.lid);
    resp.subscribe(
      (data)=>{
        console.log(data);
        this.bookModel = data;
      }
    );

  }

  /*
    //another type value we can get from QueryMap name?asanka,age?3232
  ///import { ActivatedRoute, ParamMap } from '@angular/router';
  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      let id_department = parseInt(params.get('id'));
      this.id = id_department;
    });

  }

  */

  clickOnSearchButton(){
    this.showGrid = false;
    this.router.navigate(['search'],{relativeTo:this.route});
  }

  goMainMenu(){
    this.router.navigate(['menu/books']);

  }

}
