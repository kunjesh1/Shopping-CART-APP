import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserService } from './shared/user.service';
import {AppRoutingModule,routingComponents } from './app-routing/app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import {MatFormFieldModule, MatSelectModule, MatCardModule, MatInputModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    routingComponents,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
],
  providers: [UserService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({

  exports:[ MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
  MatButtonModule]


})

export class MaterialDesign{}
