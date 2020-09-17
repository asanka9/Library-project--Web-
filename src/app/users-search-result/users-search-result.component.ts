import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-search-result',
  templateUrl: './users-search-result.component.html',
  styleUrls: ['./users-search-result.component.scss']
})
export class UsersSearchResultComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goMainMenu(){
    this.router.navigate(['menu/books']);

  }
}
