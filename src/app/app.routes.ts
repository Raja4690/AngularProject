import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableUserComponent } from './table-user/table-user.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
   {path: 'view', component: ViewCardComponent},
   {path: 'add', component: AddCardComponent},
  {redirectTo:'login', path:'', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'login/signup',component:SignupComponent},
  {path:'user',component:TableUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}