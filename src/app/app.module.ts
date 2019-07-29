import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomFormsModule } from 'ng2-validation';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserService } from './shared/user.service';
import {AppRoutingModule,routingComponents } from './app-routing/app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import {MatFormFieldModule, MatSelectModule, MatCardModule, MatInputModule, MatButtonModule,MatTableModule, MatIconModule,MatSortModule, MatPaginatorModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsComponent } from './products/products.component'; 
import {CategoryService} from './shared/category.service';
import { ProductService } from './shared/product.service';
import { ShoppingBlockComponent } from './shopping-block/shopping-block.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    routingComponents,
    HeaderComponent,
    DropdownDirective,
    ProductFormComponent,
    ProductsComponent,
    ShoppingBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule

],
  providers: [UserService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    CategoryService,
    ProductService
     
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
  MatButtonModule,
MatIconModule,
MatSortModule,
MatPaginatorModule]


})

export class MaterialDesign{}
