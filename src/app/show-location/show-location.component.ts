import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';;

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.scss']
})
export class ShowLocationComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(
    private dialogRef : MatDialogRef<ShowLocationComponent>
  ) { }

  closeButton(){
    this.dialogRef.close();
  }

}
