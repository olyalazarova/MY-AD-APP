import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewUserComponent} from './user/new-user/new-user.component';
import{LoginUserComponent} from './user/login-user/login-user.component';
import{ArchitectureComponent} from './architecture/architecture.component';
import{SearchComponent} from './search/search.component';
import {DesignComponent} from './design/design.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
},
//{ path: 'home', 
  //component: HomeComponent 
//},
{
  path: 'home',
  component: HomeComponent,
    data: {
    title: 'HOME'
}
},
{
  path: 'register',
  component: NewUserComponent,
  data: {
    title: 'REGISTER'
}
},
{
  path: 'login',
  component: LoginUserComponent,
  data: {
    title: 'LOGIN'
}
},
{
  path: 'architecture',
  component: ArchitectureComponent,
  data: {
    title: 'ARCHITECTURE'
}
},

{
  path: 'search',
  component: SearchComponent,
  data: {
    title: 'SEARCH'
}
},

{
  path: 'design',
  component: DesignComponent,
  data: {
    title: 'DESIGN'
}
},



];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
  //})
  //export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(routes);