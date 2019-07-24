import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {Routes,RouterModule}  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthGuard } from '../auth/auth.guard';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  {
      path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignUpComponent,UserProfileComponent];
