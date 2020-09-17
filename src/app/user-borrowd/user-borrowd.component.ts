import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NavComponent } from '../nav/nav.component';
import { UserAccountComponent } from '../user-account/user-account.component';

@Component({
  selector: 'app-user-borrowd',
  templateUrl: './user-borrowd.component.html',
  styleUrls: ['./user-borrowd.component.scss']
})
export class UserBorrowdComponent implements OnInit {

  orderBooks : any;
  checkNewUser : boolean;

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {

    let response = this.service.returnUserDetails(NavComponent.model.id);
    response.subscribe(
      (data01)=>{


        if (data01.lid != null) {
          this.checkNewUser = false;
          let resp=this.service.returnAllBooks(data01);
          resp.subscribe(
            (data)=>{
              if (data==null) {
                this.checkNewUser = true;
              }
              this.orderBooks = data;
              console.log(data);
            },
            (error)=>{

            }
          );
        }

      }
    );


  }
  checkNegativeOrPositive(num:number){
    if (num<0) {
      num = -num;
      return '[ '+ num +' ]';
    } else {
      return num ;
    }
  }
}
