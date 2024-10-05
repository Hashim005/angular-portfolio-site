import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { adminGuard } from '../auth/admin.guard';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin-home',
    pathMatch:"full"
  },
  {
    path:'admin-home',
    component:AdminHomeComponent,
    canActivate:[adminGuard]
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
