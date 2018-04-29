import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './person-delete-dialog.component.html',
  styleUrls: ['./person-delete-dialog.component.css']
})
export class PersonDeleteDialogComponent implements OnInit {
  name: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.person.firstName + ' ' + data.person.lastName;
  }

  ngOnInit() {
  }

}
