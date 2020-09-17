import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {MaterialcomponentsModule} from './materialcomponents/materialcomponents.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { LibraryRegisterService } from './library-register.service';
import {MatNativeDateModule} from '@angular/material/core';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {GoogleComponentComponent} from './google-component/google-component.component'
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { UsersBooksComponent } from './users-books/users-books.component';
import { UserBorrowdComponent } from './user-borrowd/user-borrowd.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SuperuserBorrowedBooksComponent } from './superuser-borrowed-books/superuser-borrowed-books.component';
import { SuperuserCreateUsersComponent } from './superuser-create-users/superuser-create-users.component';
import { SuperuserBookOperationComponent } from './superuser-book-operation/superuser-book-operation.component';
import { SuperuserChnageaccountLibraryComponent } from './superuser-chnageaccount-library/superuser-chnageaccount-library.component';
import { SuperuserBookCategoryComponent } from './superuser-book-category/superuser-book-category.component';
import { UsersSearchResultComponent } from './users-search-result/users-search-result.component';
import { SuperuserserviceService } from './superuserservice.service';
import { UserLibrariesComponent } from './user-libraries/user-libraries.component';
import { UserServiceService } from './user-service.service';
import { ShowLocationComponent } from './show-location/show-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AdminHomeComponent,
    AdminAccountComponent,
    UsersBooksComponent,
    UserBorrowdComponent,
    UserAccountComponent,
    SuperuserBorrowedBooksComponent,
    SuperuserCreateUsersComponent,
    SuperuserBookOperationComponent,
    SuperuserChnageaccountLibraryComponent,
    SuperuserBookCategoryComponent,
    UsersSearchResultComponent,
    UserLibrariesComponent,
    ShowLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialcomponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatNativeDateModule
  ],
  providers: [LibraryRegisterService,SuperuserserviceService,UserServiceService],
  bootstrap: [AppComponent],
  entryComponents:[GoogleComponentComponent,ShowLocationComponent]
})
export class AppModule { }
