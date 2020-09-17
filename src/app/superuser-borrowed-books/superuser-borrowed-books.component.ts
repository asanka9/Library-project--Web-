import { Component, OnInit } from '@angular/core';
import { SuperuserserviceService } from '../superuserservice.service';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-superuser-borrowed-books',
  templateUrl: './superuser-borrowed-books.component.html',
  styleUrls: ['./superuser-borrowed-books.component.scss']
})
export class SuperuserBorrowedBooksComponent implements OnInit {

  constructor(private service:SuperuserserviceService) { }
  borrowedBookList:any;
  showModal=false;

  ngOnInit(): void {
    let resp = this.service.returnBorrowedBooks(NavComponent.model.lid);
    resp.subscribe(
      (data)=>this.borrowedBookList=data
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
