import { NgModule } from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { HeaderComponent } from '../header/header.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  {
      path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
  },
  {path:'main',component:HeaderComponent,canActivate:[AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignUpComponent,UserProfileComponent];
