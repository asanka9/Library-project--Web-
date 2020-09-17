import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {NavComponent} from '../nav/nav.component';
import { LibraryModel } from '../LibraryModel';
import { UserModel } from '../UserModel';
import { FormBuilder } from '@angular/forms';
import {ShowLocationComponent} from '../show-location/show-location.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'




@Component({
  selector: 'app-user-libraries',
  templateUrl: './user-libraries.component.html',
  styleUrls: ['./user-libraries.component.scss']
})
export class UserLibrariesComponent implements OnInit {

  showAddLibraries : boolean;
  userId : String;
  userPassword : String;
  showFirstUser : boolean;
  listOfLibraries : LibraryModel;
  userModel : UserModel;
  deleteUserModel : UserModel;
  addedUserModel : UserModel;

  constructor(private service:UserServiceService,private fb:FormBuilder,private dialog:MatDialog) {

   }





   myForm = this.fb.group(
     {
       id : [''],
       password : ['']
     }
   );


  ngOnInit(): void {
    //this.userModel = NavComponent.model;
    let reponse = this.service.returnUserDetails(NavComponent.model.id);
    reponse.subscribe(
      (data)=> {this.userModel = data;
        this.showFirstUser = false;
        this.showAddLibraries = false;
        if (this.userModel.lid !=null) {
          console.log('ddddddddddddddddddddddddddddddddddd');
          this.showFirstUser = true;
          console.log('CCCCCCCCCCCCC    :: '+this.userModel.lid);
          let resp=this.service.getListOfLibraries(this.userModel.lid);
          resp.subscribe((data)=>{
            this.listOfLibraries = data;
          });
        }
      }
    );

  }


  addLibrary(form){
    /*
    console.log(this.userModel);
    let resp =this.service.addLibrary(form.value.id,form.value.password,this.userModel);
    resp.subscribe(
      (data)=>{
        this.listOfLibraries = data;
        this.showFirstUser = false;
        if (this.userModel.lid==null) {
          this.userModel.lid = form.value.id.split(" ",1)+"";
          var arr = form.value.id.split(" ",2);
          console.log(arr[1]);
          this.userModel.nic = arr[1]+" ";
        } else {
          this.userModel.lid = this.userModel.lid+ " "+ form.value.id.split(" ",1);
          var arr = form.value.id.split(" ",2);
          console.log(arr[1]);
          this.userModel.nic = this.userModel.nic+ " "+arr[1];
        }
      },
      (error)=>{

      }
    );*/

    let resp = this.service.returnUserDetails(this.userModel.id);
    resp.subscribe(
      (user)=>{
        console.log(user);
        this.addedUserModel = user;
        let resp =this.service.addLibrary(form.value.id,form.value.password,this.addedUserModel);
        resp.subscribe(
          (data)=>{
            this.listOfLibraries = data;

          }
        );
      }
    );
  }


  deleteLibrary(item){
    let resp = this.service.returnUserDetails(this.userModel.id);
    resp.subscribe(
      (user)=>{
        console.log(user);
        this.deleteUserModel = user;
        let response = this.service.deleteLibrary(this.deleteUserModel.id,item,this.deleteUserModel.lid,this.deleteUserModel.nic);

        response.subscribe(
          (data)=>{
            this.listOfLibraries = data;
          }
        );
      }
    );
  }

  goLocationGoogleMap(){
    const dialogCofiguration = new MatDialogConfig();
    dialogCofiguration.disableClose = false;
    dialogCofiguration.autoFocus = true;
    dialogCofiguration.width = "60%";
    this.dialog.open(ShowLocationComponent,dialogCofiguration);
  }


}
