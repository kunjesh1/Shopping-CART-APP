import { NgModule } from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { ProductFormComponent } from '../products/product-form/product-form.component';
import { ShoppingBlockComponent } from '../shopping-block/shopping-block.component';
import { ChangePasswordComponent } from '../user-profile/change-password/change-password.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  {
      path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
  },

  {
    path:'main',component:ShoppingBlockComponent,canActivate:[AuthGuard]
  }
,
  {
    path:'products' ,component:ProductsComponent

  },
  {
    path:'products/new', component:ProductFormComponent
  },

  {
    path:'products/:id', component:ProductFormComponent
  },
  {path:'changePassword',component:ChangePasswordComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '/main' },
  {path:'',component:HeaderComponent},

  
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignUpComponent,UserProfileComponent];
