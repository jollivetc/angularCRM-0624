import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './login/authentication.guard';
import { ConsumerListComponent } from './consumer/consumer-list/consumer-list.component';

export const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[authenticationGuard]},
  {path:'list', component:ConsumerListComponent, canActivate:[authenticationGuard]},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];
