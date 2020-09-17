import { Component, OnInit } from '@angular/core';
import { SuperuserserviceService } from '../superuserservice.service';
import {NavComponent} from '../nav/nav.component'

@Component({
  selector: 'app-superuser-book-operation',
  templateUrl: './superuser-book-operation.component.html',
  styleUrls: ['./superuser-book-operation.component.scss']
})
export class SuperuserBookOperationComponent implements OnInit {

  userIdBorrowed : String;
  errorBorrowed : boolean;


  constructor(private service:SuperuserserviceService) { }

  ngOnInit(): void {
    this.errorBorrowed = false;
  }

  //ook/"+lid+"/"+date+"/"+uid+"/"+bname);
  borowBookToUser(form){
    const lid = NavComponent.model.lid;
    let response = this.service.borrowedBooks(lid,form.value.date,form.value.uid,form.value.bname);
    response.subscribe(
      (data)=>{
        console.log("SUCCESSSSSSSS !!!!!!!!!!");
        this.errorBorrowed = false;
      },
      (error)=>{
        this.errorBorrowed = true;
      }
    );
  }

  returnBookFromUser(form){
    const lid = NavComponent.model.lid;
    let resp = this.service.removeBookFromBorowedBook(lid,form.value.uid,form.value.bname);
    resp.subscribe(
      (data)=>{

      },
      (erroe)=>{

      }
    );
  }

}
