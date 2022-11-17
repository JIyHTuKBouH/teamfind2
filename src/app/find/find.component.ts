import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor() { }

  isInSearch = false;

  ngOnInit(): void {
  }
  startSearch() {
    this.foundPlayer = false;
    this.isInSearch = true;
    setTimeout(() => { this.isInSearch = false; this.foundPlayer = true;}, 2000)
  }
  foundPlayer = false;

}
