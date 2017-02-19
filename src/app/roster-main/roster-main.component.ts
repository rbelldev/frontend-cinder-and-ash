import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roster-main',
  templateUrl: './roster-main.component.html',
  styleUrls: ['./roster-main.component.css']
})
export class RosterMainComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
