import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    NavbarComponent,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule

  ],
})
export class ComputersComponent {

//Variables estaticas de las computadoras
  dxps = {
    nombre: "Dell XPS",
    precio: "$ 850"
  }

  di14 = {
    nombre: "Dell Inspiron 14",
    precio: "$ 500"
  }

  slgo = {
    nombre: "Surface Laptop Go",
    precio: "$ 587"
  }

  lcd3 = {
    nombre: "Lenovo Chromebook Duet 3",
    precio: "$ 850"
  }

}
