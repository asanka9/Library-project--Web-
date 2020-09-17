import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { UsersBooksComponent } from './users-books/users-books.component';
import { UserBorrowdComponent } from './user-borrowd/user-borrowd.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SuperuserBorrowedBooksComponent } from './superuser-borrowed-books/superuser-borrowed-books.component';
import { SuperuserBookOperationComponent } from './superuser-book-operation/superuser-book-operation.component';
import { SuperuserChnageaccountLibraryComponent } from './superuser-chnageaccount-library/superuser-chnageaccount-library.component';
import { SuperuserCreateUsersComponent } from './superuser-create-users/superuser-create-users.component';
import { SuperuserBookCategoryComponent } from './superuser-book-category/superuser-book-category.component';
import { UsersSearchResultComponent } from './users-search-result/users-search-result.component';
import { UserLibrariesComponent } from './user-libraries/user-libraries.component';


const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'menu',
    children:[
  //admin

  {path:'adminAccount',component:AdminAccountComponent},

  //user
  {path:'books',
      children:[
        {path:'category/:name',
        children:[
          {path:'search',component:UsersSearchResultComponent}
        ],
        component:SuperuserBookCategoryComponent},
        {path:'search',component:UsersSearchResultComponent}
      ],
  component:UsersBooksComponent},
  {path:'myBooks',component:UserBorrowdComponent},
  {path:'userAccount',component:UserAccountComponent},

  //superuser
  {path:'borrowedBooks',component:SuperuserBorrowedBooksComponent},
  {path:'bookTask',component:SuperuserBookOperationComponent},
  {path:'settings',component:SuperuserChnageaccountLibraryComponent},
  {path:'createUsers',component:SuperuserCreateUsersComponent},

  //external users
  {path:'libraries',component:UserLibrariesComponent},
  {path:'myBooks',component:UserBorrowdComponent},
  {path:'myAccount',component:UserAccountComponent}
    ],

  component:NavComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
