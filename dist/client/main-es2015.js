(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"showHead\"></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-light\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a routerLink=\"['/main']\" class=\"navbar-brand\">Shopping Cart</a>\n      </div>\n  \n      <div class=\"collapse navbar-collapse\">\n        <!-- <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/userprofile\">UserProfile</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/login\"></a></li>\n        </ul> -->\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"dropdown\" appDropdown>\n            <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage Account</a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/userprofile\" style=\"cursor: pointer;\">My Account</a></li>\n              <li><a  routerLink=\"/products\" style=\"cursor: pointer;\">Manage Products</a></li>\n\n              <li><a style=\"cursor:pointer;\" (click)=\"onLogout()\">Log Out</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Login</mat-card-title>\n<mat-card-content>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n  <p>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n  </p>\n\n  <p *ngIf=\"serverErrorMessages\" class=\"error\">\n    {{ serverErrorMessages }}\n  </p>\n\n  <div class=\"button\">\n    <button type=\"submit\"  mat-button>Login</button>\n  </div>\n\n  <a [routerLink]=\"['/register']\"  class=\"btn btn-link\">Register</a>\n\n</form>\n</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/product-form/product-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/product-form/product-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"col-md-6\">\n          <form #f=\"ngForm\" (ngSubmit)=\"onSave(f.value)\">\n              <div class=\"form-group\">\n                <label for=\"title\">Title</label>\n                <input #title=\"ngModel\" [(ngModel)]=\"product.title\" name=\"title\" id=\"title\" type=\"text\" class=\"form-control\" required>\n                <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n                  Title is required.\n                </div>\n              </div>        \n              <div class=\"form-group\">\n                <label for=\"price\">Price</label>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">Rs</span>\n                  <input #price=\"ngModel\" [(ngModel)]=\"product.price\" name=\"price\" id=\"price\" type=\"number\" class=\"form-control\" required [min]=\"0\">\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n                  <div *ngIf=\"price.errors.required\">Price is required.</div>\n                  <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n                </div>\n              </div>        \n              <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <select #category=\"ngModel\" [(ngModel)]=\"product.category\" name=\"category\" id=\"category\" class=\"form-control\" required>\n                  <option value=\"\"></option> \n                  <option *ngFor=\"let c of categories\"  [value]=\"c.name\">\n                    {{ c.name }}\n                  </option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n                  Category is required.\n                </div>\n              </div>        \n              <div class=\"form-group\">\n                <label for=\"imageUrl\">Image URL</label>\n                <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" name=\"imageUrl\" id=\"imageUrl\" type=\"text\" class=\"form-control\" required url>\n                <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                  <div *ngIf=\"imageUrl.errors.required\">Image URL is required.</div>\n                  <div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL.</div>\n                </div>\n              </div>        \n              <button class=\"btn btn-primary\">Save</button>\n            </form>    \n        </div>\n        <div class=\"col-md-6\">\n          <div  class=\"card\" style=\"width: 20rem;\">\n            <img class=\"card-img-top\" [src]=\"product.imageUrl\" *ngIf=\"product.imageUrl\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{ product.title }}</h4>\n              <p class=\"card-text\">{{ product.price | currency:\"₹\":true }}</p>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<p>\n<a routerLink=\"/products/new\" class=\"btn btn-primary pull-right\">New Product</a>\n</p>\n <p>\n    \n    <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n    <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</p>\n\n<div class=\"mat-elevation-z8\">\n\n    <mat-table [dataSource]=\"listData\" matSort>\n        <ng-container matColumnDef=\"title\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{element.title}}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"price\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Price</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.price}}</mat-cell>      \n            </ng-container>\n\n            <ng-container matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef #idValue></mat-header-cell>\n                    \n                   <mat-cell *matCellDef=\"let row\">\n                           <button mat-icon-button [routerLink]=\"['/products', row._id]\"><mat-icon>launch</mat-icon></button>\n                           <button mat-icon-button color=\"warn\" (click)=\"onDelete(row._id)\" ><mat-icon>delete_outline</mat-icon></button>\n                       \n                    </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"loading\">\n                    <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                        Loading data ...\n                        </mat-footer-cell>\n\n                </ng-container>\n\n\n                <ng-container matColumnDef=\"noData\">\n                        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                              No Data\n                            </mat-footer-cell>\n    \n                    </ng-container>\n        \n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns:displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(listData!=null &&listData.data.length==0)}\"></mat-footer-row>\n</mat-table>\n\n<mat-paginator [pageSizeOptions]=\"[5,10,25,100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-block/shopping-block.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-block/shopping-block.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>shopping-block works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Register</mat-card-title>\n<mat-card-content>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <p>\n                <mat-form-field>\n                  <input type=\"text\" matInput placeholder=\"FullName\" formControlName=\"fullName\">\n                </mat-form-field>\n              </p>\n\n\n  <p>\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n    </mat-form-field>\n  </p>\n\n  <p>\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n  </p>\n\n  <p *ngIf=\"serverErrorMessages\" class=\"error\">\n    {{ serverErrorMessages }}\n  </p>\n\n  <div class=\"button\">\n    <button type=\"submit\" [disabled]=\"loading\"  mat-button>Register</button>\n    <img *ngIf=\"loading\"\n    src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n<a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n  </div>\n\n</form>\n</mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bootstrap snippet\">\n    <div class=\"row\">\n        <div class=\"col-sm-10\">\n            <h1>User name</h1>\n        </div>\n        <div class=\"col-sm-2\"> <a [routerLink]=\"['/main']\" class=\"btn btn-link\">Back to Home Page</a></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-3\">\n            <!--left col-->\n\n            <div class=\"text-center\">\n                <img src=\"assets/images/download.jpeg\" class=\"avatar img-circle img-thumbnail\"\n                    alt=\"avatar\">\n                <h6>Upload a different photo...</h6>\n                <input type=\"file\" class=\"text-center center-block file-upload\" (change)=\"onFileUpload($event.target.files[0])\">\n            </div>\n        </div>\n        <!--/col-3-->\n        <div class=\"col-sm-9\">\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\n                <li><a data-toggle=\"tab\" href=\"#messages\">Menu 1</a></li>\n                <li><a data-toggle=\"tab\" href=\"#settings\">Menu 2</a></li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"home\">\n\n                    <div class=\"pull-right\">\n                        <button class=\"btn btn-danger\" (click)=\"onEdit()\" mat-button>Edit</button>\n                    </div>\n                    <br><br>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item text-muted\">Profile <i class=\"fa fa-dashboard fa-1x\"></i></li>\n                        <li class=\"list-group-item text-left\" *ngIf=[userDetails]>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>\n                                        <h5><strong>FullName</strong></h5>\n                                    </label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div *ngIf=\"disabled;else elseBlock\">\n                                        <h5>{{userDetails.fullName}}</h5>\n                                    </div>\n                                    <ng-template #elseBlock>\n                                        \n                                            <div class=\"form-group\">\n                                                <input type=\"text\"  class=\"form-control\" placeholder=\"{{userDetails.fullName}}\">\n                                            </div>\n                                            \n\n                                    </ng-template>\n\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"list-group-item text-left\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>\n                                        <h5><strong>Email</strong></h5>\n                                    </label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div *ngIf=\"disabled;else elseBlock\">\n                                        <h5>{{userDetails.email}}</h5>\n                                    </div>\n                                    <ng-template #elseBlock>\n                                            <div class=\"form-group\">\n                                                    <input type=\"text\"  class=\"form-control\" placeholder=\"{{userDetails.email}}\">\n                                                </div>\n                                    </ng-template>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"list-group-item text-left\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>\n                                        <h5><strong>Password</strong></h5>\n                                    </label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5\">\n                                            <div *ngIf=\"disabled;else elseBlock\">\n                                                <h5>***********</h5>\n                                            </div>\n                                            <ng-template #elseBlock>\n                                                <h5><input type=\"text\"></h5>\n                                            </ng-template>\n                                        </div>\n\n                                        <div class=\"col-md-7\">\n                                            <div class=\"pull-right\">\n                                                <button class=\"btn btn-danger\" mat-button>Change Password</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"list-group-item text-left\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>\n                                        <h5><strong>Mobile No</strong></h5>\n                                    </label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div *ngIf=\"disabled else elseblock\">\n                                    <h5>4394</h5>\n                                 </div>\n\n                                    <ng-template #elseBlock>\n                                        \n                                            <div class=\"form-group\">\n                                                <input type=\"text\"  class=\"form-control\" placeholder=\"{{userDetails.mobile}}\">\n                                            </div>\n                                            \n\n                                    </ng-template>\n\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                    <div class=\"col-xs-12\" style=\" display: flex;justify-content: center;\">\n                        <br><br>\n                        <button class=\"btn btn-lg btn-success\" type=\"submit\" mat-button><i\n                                class=\"glyphicon glyphicon-ok-sign\"></i> Save</button>\n                        <button class=\"btn btn-lg\" type=\"reset\" mat-button><i class=\"glyphicon glyphicon-repeat\"></i>\n                            Reset</button>\n                    </div>\n                </div>\n            </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>user works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/product-form/product-form.component */ "./src/app/products/product-form/product-form.component.ts");
/* harmony import */ var _shopping_block_shopping_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shopping-block/shopping-block.component */ "./src/app/shopping-block/shopping-block.component.ts");











const appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    {
        path: 'userprofile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'main', component: _shopping_block_shopping_block_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingBlockComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"]
    },
    {
        path: 'products/new', component: _products_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]
    },
    {
        path: 'products/:id', component: _products_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductFormComponent"]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '/main' },
    { path: '', component: _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.showHead = true;
        this.title = 'client';
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event['url'] == '/login') {
                    this.showHead = false;
                }
                else if (event['url'] == '/register') {
                    this.showHead = false;
                }
                else {
                    console.log("this.showHead" + this.showHead);
                    this.showHead = true;
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, MaterialDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesign", function() { return MaterialDesign; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/dropdown.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _products_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/product-form/product-form.component */ "./src/app/products/product-form/product-form.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shared_category_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/category.service */ "./src/app/shared/category.service.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _shopping_block_shopping_block_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shopping-block/shopping-block.component */ "./src/app/shopping-block/shopping-block.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["routingComponents"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
            _products_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_17__["ProductFormComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
            _shopping_block_shopping_block_component__WEBPACK_IMPORTED_MODULE_21__["ShoppingBlockComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_6__["CustomFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
                timeOut: 1500,
                positionClass: 'toast-top-center',
                preventDuplicates: false
            }),
        ],
        providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
                multi: true
            },
            _shared_category_service__WEBPACK_IMPORTED_MODULE_19__["CategoryService"],
            _shared_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_22__["UserProfileComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);

let MaterialDesign = class MaterialDesign {
};
MaterialDesign = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"]]
    })
], MaterialDesign);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");





let AuthInterceptor = class AuthInterceptor {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    intercept(req, next) {
        if (req.headers.get('NoAuth')) {
            console.log(req.headers.get('NoAuth'));
            return next.handle(req.clone());
        }
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(event => { }, err => {
                if (err.error.auth == false) {
                    this.router.navigateByUrl('/login');
                }
            }));
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/dropdown.directive.ts":
/*!***************************************!*\
  !*** ./src/app/dropdown.directive.ts ***!
  \***************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLogout() {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html")
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 100px 0px;\n  }\n\n  .mat-form-field {\n    width: 100%;\n    min-width: 300px;\n  }\n\n  mat-card-title,\n  mat-card-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .error {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n  }\n\n  .button {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIG1hdC1jYXJkLXRpdGxlLFxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmVycm9yIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
        this.serverErrorMessages = '';
        this.model = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    }
    onSubmit() {
        this.userService.login(this.loginForm.value).subscribe(res => {
            this.userService.setToken(res['token']);
            this.router.navigateByUrl('/main');
        }, err => {
            this.serverErrorMessages = err.error.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/products/product-form/product-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-form/product-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZm9ybS9wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/products/product-form/product-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-form/product-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/category.service */ "./src/app/shared/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ProductFormComponent = class ProductFormComponent {
    constructor(categoryService, router, productService, route, toastr) {
        this.categoryService = categoryService;
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.toastr = toastr;
        this.productId = '';
        this.product = {};
        console.log(this.route);
        console.log(this.route.snapshot.params.id);
        this.productId = this.route.snapshot.params.id;
        if (this.productId) {
            this.productService.getProductbyId(this.productId).subscribe(product => {
                this.product = product;
                console.log(this.product);
            });
        }
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data;
            console.log(data['name']);
        });
    }
    onSave(product) {
        if (this.productId) {
            console.log("patching");
            this.productService.updateProduct(this.productId, product).subscribe(result => console.log("Updated successfully" + result), err => console.log(err), () => { this.toastr.success("Updated successfully"); });
        }
        else {
            this.productService.saveProducts(product).subscribe((result) => {
                console.log("Added successfully\n" + result);
            }, err => {
                console.log("Something went wrong" + err);
                this.toastr.error("Someting Went Wrong");
            }, () => {
                this.toastr.success("Added successfully");
            });
        }
    }
    getProducts() {
        this.productService.getProductbyId(this.productId).subscribe(result => {
            console.log(result);
        });
    }
};
ProductFormComponent.ctorParameters = () => [
    { type: _shared_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-form',
        template: __webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/product-form/product-form.component.html"),
        styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/products/product-form/product-form.component.css")]
    })
], ProductFormComponent);



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ProductsComponent = class ProductsComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.displayedColumns = ['title', 'price', 'actions'];
        this.searchKey = "";
    }
    ngOnInit() {
        console.log();
        this.subscription = this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.products);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
        }, err => {
            console.log(err);
        }, () => {
        });
    }
    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }
    applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();
        console.log(this.searchKey.trim().toLowerCase());
    }
    onDelete(id) {
        this.productService.deleteProduct(id).subscribe(result => console.log(result), err => console.log(err));
        console.log(this.products);
        this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.products);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
        }, err => {
            console.log(err);
        }, () => {
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], ProductsComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], ProductsComponent.prototype, "paginator", void 0);
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/shared/category.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/category.service.ts ***!
  \********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/categories');
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/product.service.ts ***!
  \*******************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    saveProducts(product) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/products", product);
    }
    getProducts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/fetch/products");
    }
    getProductbyId(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/getParticular/' + id);
    }
    deleteProduct(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/deleteProduct/' + id);
    }
    updateProduct(id, obj) {
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/putProduct/' + id, obj);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
    }
    getStatus(data) {
        return this.http.post("http://localhost:3000/api/authenticate", data);
    }
    postUser(user) {
        console.log(user);
        return this.http.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/register', user);
    }
    login(authCredentials) {
        return this.http.post(_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    getUserPayload() {
        var token = this.getToken();
        console.log(token);
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    }
    isLoggedIn() {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    }
    getUserProfile() {
        return this.http.get(_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/userProfile');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/shopping-block/shopping-block.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shopping-block/shopping-block.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWJsb2NrL3Nob3BwaW5nLWJsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-block/shopping-block.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shopping-block/shopping-block.component.ts ***!
  \************************************************************/
/*! exports provided: ShoppingBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBlockComponent", function() { return ShoppingBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingBlockComponent = class ShoppingBlockComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingBlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-block',
        template: __webpack_require__(/*! raw-loader!./shopping-block.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-block/shopping-block.component.html"),
        styles: [__webpack_require__(/*! ./shopping-block.component.css */ "./src/app/shopping-block/shopping-block.component.css")]
    })
], ShoppingBlockComponent);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin: 100px 0px;\n  }\n\n  .mat-form-field {\n    width: 100%;\n    min-width: 300px;\n  }\n\n  mat-card-title,\n  mat-card-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .error {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n  }\n\n  .button {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTAwcHggMHB4O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgbWF0LWNhcmQtdGl0bGUsXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICJdfQ== */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let SignUpComponent = class SignUpComponent {
    constructor(formBuilder, router, userService, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.postUser(this.registerForm.value)
            .subscribe(data => { }, error => {
            console.log(error);
            this.loading = false;
            this.toastr.error("Something Went Wrong");
        }, () => {
            this.toastr.success("User Successfully Created");
            this.router.navigateByUrl('/login');
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let UserProfileComponent = class UserProfileComponent {
    constructor(userService, router, http) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.url = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
        this.disabled = true;
    }
    ngOnInit() {
        console.log(this.disabled);
        this.userService.getUserProfile().subscribe(res => {
            this.userDetails = res['user'];
            console.log(this.userDetails);
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    }
    onEdit() {
        this.disabled = !this.disabled;
        console.log(this.disabled);
    }
    onFileUpload(file) {
        console.log(file);
        var formData = new FormData();
        formData.append('productImage', file);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/updateProfile", formData)
            .subscribe(event => {
            console.log(event);
            this.url = event.toString();
        }, err => console.log(err), () => {
            // if (file) {
            //   var reader = new FileReader();
            //   reader.readAsDataURL(file); // read file as data url
            //   reader.onload = (event) => { // called once readAsDataURL is completed
            //     this.url = event.target.result;
            //   }
            // }
        });
        console.log(this.url);
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html"),
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
    })
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    "apiBaseUrl": "http://localhost:3000/api",
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kunjesh/Shopping-CART-APP/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map