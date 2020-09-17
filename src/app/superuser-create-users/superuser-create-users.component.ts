import { Component, OnInit } from '@angular/core';
import {NavComponent} from '../nav/nav.component';
import { SuperuserserviceService } from '../superuserservice.service';
import {UserModel} from '../UserModel';



@Component({
  selector: 'app-superuser-create-users',
  templateUrl: './superuser-create-users.component.html',
  styleUrls: ['./superuser-create-users.component.scss']
})
export class SuperuserCreateUsersComponent implements OnInit {

  model = new UserModel(null,null,null,null,null,null,null,null,null,null);
  smodel = new UserModel(null,null,null,null,null,null,null,null,null,null);

  searchModels =new UserModel(null,null,null,null,null,null,null,null,null,null);
  uModel:UserModel;

  clickOnSearchButtton : boolean;
  userFound : boolean;




  constructor(private service:SuperuserserviceService) { }

  submitUser :boolean;
  submitAdmin :boolean;
  adminErrorMessage:boolean;
  userErrorMessage:boolean;

  searchUserName : String;

  ngOnInit(): void {
    this.uModel=NavComponent.model;
    this.submitUser=false;
    this.submitAdmin=false;
    this.adminErrorMessage=false;
    this.userErrorMessage=false;
    this.clickOnSearchButtton = false;
    this.userFound = false;
  }

  private addToELib(mode){
    this.submitUser=true;
    this.userErrorMessage=false;
    this.model=mode;
  }

  loginVerification(){
    console.log(NavComponent.model.lid);
    let resp =  this.service.createUser(NavComponent.model.lid,this.model);
    resp.subscribe(
      (data)=>this.addToELib(data),
      (error) => {                              //Error callback
        this.userErrorMessage =true;
      }
      );
  }

  goUser(){
    this.submitUser=false;
  }



  private addToELib1(mode){
    this.submitAdmin=true;
    this.adminErrorMessage=false;
    this.smodel=mode;
  }

  loginAdminVerification(){
    let resp =  this.service.createSuperUser(NavComponent.model.lid,this.smodel);
    resp.subscribe(
      (data)=>this.addToELib1(data),
      (error) => {                              //Error callback
        this.adminErrorMessage =true;
      }


      );

  }

  goAdmin(){
    this.submitAdmin=false;
  }

  searchWithId(){
    this.clickOnSearchButtton = true;
    let resp=this.service.getUserDetails(this.searchUserName);
    resp.subscribe(
      (data)=>{
        this.searchModels = data;
        this.userFound = true;
        console.log(data);
      },
      (error)=>{
        this.userFound = false;
      }
    );
  }




  /*

    createUser(){
    let resp=this.service.createUser();
  }

  createSuperUser(){
    let resp=this.service.createSuperUser();
  }

  */

}
