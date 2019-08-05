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
import {ToastrModule} from 'ngx-toastr';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsComponent } from './products/products.component'; 
import {CategoryService} from './shared/category.service';
import { ProductService } from './shared/product.service';
import { ShoppingBlockComponent } from './shopping-block/shopping-block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "src/environments/environment";
import { ShoppingBlockFilterComponent } from './shopping-block/shopping-block-filter/shopping-block-filter.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ChangePasswordComponent } from './user-profile/change-password/change-password.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    routingComponents,
    HeaderComponent,
    DropdownDirective,
    ProductFormComponent,
    ProductsComponent,
    ShoppingBlockComponent,
    ShoppingBlockFilterComponent,
    ShoppingCardComponent,
    ChangePasswordComponent
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
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut:1500,
      positionClass:'toast-top-center',
      preventDuplicates:false

    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatDialogModule


],
  providers: [UserService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    CategoryService,
    ProductService,
    UserProfileComponent
     
  ],
  bootstrap: [AppComponent],
  entryComponents:[ChangePasswordComponent]
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
