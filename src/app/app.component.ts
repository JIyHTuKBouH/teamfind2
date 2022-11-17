import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pupa';
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  isExpanded = false;
  isLogedin() {
    let user = localStorage.getItem("user");
    if (user == null)
      return false;
    return true
  }
}
