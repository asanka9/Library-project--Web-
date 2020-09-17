import { Component, OnInit } from '@angular/core';
import { SuperuserserviceService } from '../superuserservice.service';
import {NavComponent} from '../nav/nav.component';
import {LibraryModel} from '../LibraryModel';
import {UserModel} from '../UserModel';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import {GoogleComponentComponent} from '../google-component/google-component.component'

@Component({
  selector: 'app-superuser-chnageaccount-library',
  templateUrl: './superuser-chnageaccount-library.component.html',
  styleUrls: ['./superuser-chnageaccount-library.component.scss']
})
export class SuperuserChnageaccountLibraryComponent implements OnInit {

  userDetailState =true;
  libraryDetailService=true;
  libraryModel : LibraryModel;
  userModel : UserModel;
  pass1 : String;
  pass2 : String;
  pass3 : String;
  pass4 : String;
  libraryUpdate = false;
  errorInUserUpdate : boolean;
  constructor(private service:SuperuserserviceService,private dialog:MatDialog) {

   }

  ngOnInit(): void {
    this.errorInUserUpdate = true;
    let resp = this.service.getLLibraryDetails(NavComponent.model.lid);
    resp.subscribe(
      (data)=>{
        this.libraryModel=data;
        console.log(data)
      }
    );
    this.userModel = NavComponent.model;
    this.errorInUserUpdate=false;
  }


  userDetailTemplate(){
    console.log(this.userDetailState);
    this.userDetailState = !this.userDetailState;
  }


  updateUserDetail()
  {
    this.userModel.password = NavComponent.model.password;

    if  ((this.pass2+' '+this.pass3+' '+this.pass4)=='undefined undefined undefined' && this.pass1 !=undefined) {
      console.log("111111111111111111111");
      this.userModel.password = this.pass1;
  }else{
    console.log("22222222222222222222222222222222");
    if (this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4 !='undefined undefined undefined undefined') {
      this.userModel.password = this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4;
    }
  }

    console.log(this.userModel);

    let response= this.service.updateUsers(this.userModel);
    response.subscribe(
      (data)=>{
        this.userModel=data;
        this.errorInUserUpdate=true;
      },
      (error)=>this.errorInUserUpdate=false

    );
  }

  updateLibraryDetails(){
    let resp = this.service.updateLibrary(this.libraryModel);
    resp.subscribe(
      (data)=>{this.libraryModel = data;this.libraryUpdate=true;}
    );

  }

  changeLibraryState(){
    this.libraryDetailService = !this.libraryDetailService;
    this.libraryUpdate = false;
  }

  addGoogleLocation(){
    const dialogCofiguration = new MatDialogConfig();
    dialogCofiguration.disableClose = false;
    dialogCofiguration.autoFocus = true;
    dialogCofiguration.width = "60%";
    this.dialog.open(GoogleComponentComponent,dialogCofiguration);
  }

}
