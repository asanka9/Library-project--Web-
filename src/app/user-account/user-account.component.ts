import { Component, OnInit } from '@angular/core';
import {NavComponent} from '../nav/nav.component';
import { UserModel } from '../UserModel';
import { SuperuserserviceService } from '../superuserservice.service';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  uModel : UserModel;
  save : boolean;
  pass1 : String;
  pass2 : String;
  pass3 : String;
  pass4 : String;
  errorInUserUpdate : boolean;
  userIds : String;
  userNics : String;
  static FUID : String;

  constructor(private service:SuperuserserviceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    console.log(UserAccountComponent.FUID);
    this.save = false;
    this.uModel= NavComponent.model;
    this.errorInUserUpdate = true;

    let response = this.userService.returnUserDetails(NavComponent.model.id);
    response.subscribe(
      (data)=>{
        this.userIds = data.lid;
        this.userNics = data.nic;
      }
    );
  }

  updateUserDetail(){
    if ((this.pass2+' '+this.pass3+' '+this.pass4=='undefined undefined undefined') && this.pass1 !=undefined) {

        this.uModel.password = this.pass1;


    }else{
      if (this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4 !='undefined undefined undefined undefined') {
        this.uModel.password = this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4;
      }

    }

      this.uModel.lid = this.userIds;
      this.uModel.nic = this.userNics;
      let response= this.service.updateUsers(this.uModel);
      response.subscribe(
        (data)=>{
          this.uModel=data;
          if (this.uModel.id != NavComponent.model.id) {
            UserAccountComponent.FUID = 'was '+ this.uModel.id;
          }
          this.errorInUserUpdate=false;
        },
        (error)=>this.errorInUserUpdate=true

      );
    }

}
