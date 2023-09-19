import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './modules/home/phones/phones.component';
import { ComputersComponent } from './modules/home/computers/computers.component';

//definicion de las rutas
const routes: Routes = [
  { path: '', component: PhonesComponent},
  { path: 'celulares', component: PhonesComponent},
  { path: 'computadoras', component: ComputersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
