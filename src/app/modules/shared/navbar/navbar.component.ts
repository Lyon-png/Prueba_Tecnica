import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatButtonModule
  ]
})
export class NavbarComponent {

  menuVariable:boolean = false;
  menuIconVariable:boolean = false;

  constructor(private route: Router) {}

  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menuIconVariable =! this.menuIconVariable;
  }

  navigatePC() {
    this.route.navigate(['computadoras'])
  }

  navigateCell() {
    this.route.navigate(['/celulares'])
  }

}
