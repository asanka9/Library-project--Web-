import { Component, OnInit } from '@angular/core';
import {UserModel} from '../UserModel';
import { LibraryRegisterService } from '../library-register.service';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //external users create
  showexCreate : boolean;
  showExError : boolean;


  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  model = new UserModel(null,null,null,null,null,null,null,null,null,null);
  exUserModel : UserModel;
  acceptTerms :true;
  submitted = false;
  selected = "Public";
  isSelected ="true";
  libraryName ="";
  numOfUsers :any;
  numOfLibraries :any;
  user_email : String;
  user_password : String;
  login_user : any;
  confirm_password : String;

  static mod :any;
  no : boolean;

  constructor(private service:LibraryRegisterService,private router:Router) { }

  ngOnInit(): void {

    this.showexCreate = true;
    this.no = false;
    this.exUserModel = new UserModel(null,null,null,null,null,null,null,null,null,null);

    let resp=this.service.numOfUsers();
    resp.subscribe((data)=>this.numOfUsers=data);

    let resp1 = this.service.numOfLibraries();
    resp1.subscribe((data)=>this.numOfLibraries=data);
  }

  onSubmit(){
    let resp=this.service.doRegister(this.model,this.libraryName);
    resp.subscribe((data)=>this.addToELib(data));
  }

  private addToELib(mode){
    this.submitted=true;
    this.model=mode;
  }

  loginVerification(){
    let resp =  this.service.loginUser(this.user_email,this.user_password);
    console.log('user name :: '+this.user_email);
    console.log('password  :'+this.user_password)
    resp.subscribe(
      (data)=>{this.name(data);
        console.log('SUSSSSSSSSSSSSSSSSSSSUUUUUUUUUU');
      },
      (error)=>{
        this.no = true;
      }
      );
  }


  createExternalUser(){
    console.log(this.exUserModel);
    let resp=this.service.createExternalUser(this.exUserModel);
    resp.subscribe(
      (data)=>{
        console.log('success create external user');
        console.log(data);
        let resp1 =  this.service.loginUser(data.id,data.password);
        resp1.subscribe(
          (data)=>{this.name(data);
            console.log('SUSSSSSSSSSSSSSSSSSSSUUUUUUUUUU');
          }
          );

      },
      (error)=>{

      }
    );
  }


  private name(model) {
      if(!(model==null)){
        HomeComponent.mod= model;
        this.router.navigate(['menu'],{
          queryParams:model,
        });
      }
  }


}
