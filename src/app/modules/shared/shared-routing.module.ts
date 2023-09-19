import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from '../home/phones/phones.component';
import { ComputersComponent } from '../home/computers/computers.component';

const routes: Routes = [
  {path: "celulares", component: PhonesComponent},
  {path: "computadoras", component: ComputersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
