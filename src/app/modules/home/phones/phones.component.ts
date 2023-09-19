import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


export interface DialogData {
  nombre: string;
  precio: string;
}

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    NavbarComponent,
    FooterComponent,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class PhonesComponent {

  modalSwitch: boolean = false;

constructor(){}

//Variables estaticas de los telefonos
   sga3 = {
    nombre: "Samsung Galaxy A03",
    precio: "$ 5,000"
  }

  sga10 = {
    nombre: "Samsung Galaxy A10",
    precio: "$ 110"
  }

  sga12 = {
    nombre: "Samsung Galaxy A03",
    precio: "$ 900"
  }

  sga13 = {
    nombre: "Samsung Galaxy A09",
    precio: "$ 2,350"
  }

openDialog() {
  console.log("prueba")
}
}


