import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import {UserModel} from '../UserModel'
import {HomeComponent} from '../home/home.component'
import { NgSwitch } from '@angular/common';
import { LibraryRegisterService } from '../library-register.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  ROLE :string;
  navItems =[false,false,false,false,false];
  navItemsUser =['',''];
  navItemsSuperUser =['bookTask','books','borrowedBooks','createUsers','settings'];
  navItemsAdminUser = ['',''];
  static model:UserModel;
  navBrands : any;

  constructor(private route:ActivatedRoute,private  router:Router,private service01:LibraryRegisterService) {
  }

  ngOnInit(): void {
   this.ROLE= HomeComponent.mod.role;
  //this.model = new UserModel('user','Asanka Gayshan','0775684323','male','9615345322v','93/hakuruwela','RJP1','USER','123');
  NavComponent.model = HomeComponent.mod;
  // this.model = new UserModel('admin','Asanka Gayshan','0775684323','male','9615345322v','93/hakuruwela','RJP1','ADMIN','123');

   switch (NavComponent.model.role) {
     case 'SUPERUSER':
      let resp=this.service01.getLibraryName(NavComponent.model.lid);
      resp.subscribe(
        (data)=>this.navBrands=data
      );
      this.router.navigate(['menu/bookTask']);
       break;
    case 'external':
        this.navBrands = 'e-Lib';
        this.router.navigate(['menu/libraries']);
          break;
   }
   console.log(this.route.snapshot.queryParamMap.get('role'));
  }
  navClickItems(item,link){

    for (let index = 0; index < this.navItems.length; index++) {
      this.navItems[index]=false;
    }
    this.navItems[item] = true;
    this.router.navigate([link],{relativeTo:this.route});

  }

}


/*

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      let id_department = parseInt(params.get('id'));
      this.id = id_department;
    });
  }


*/
