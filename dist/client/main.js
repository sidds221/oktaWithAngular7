(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _summary_list_summary_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary-list/summary-list.component */ "./src/app/summary-list/summary-list.component.ts");
/* harmony import */ var _fund_fund_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fund/fund.component */ "./src/app/fund/fund.component.ts");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security/security.component */ "./src/app/security/security.component.ts");






var routes = [
    { path: 'summary', component: _summary_list_summary_list_component__WEBPACK_IMPORTED_MODULE_3__["SummaryListComponent"] },
    { path: 'fund', component: _fund_fund_component__WEBPACK_IMPORTED_MODULE_4__["FundComponent"] },
    { path: 'security', component: _security_security_component__WEBPACK_IMPORTED_MODULE_5__["SecurityComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//  export const routingComponents = {SummaryListComponent, FundComponent}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Welcome to {{title}}!</span>\n</mat-toolbar>\n\n<style>\n\nbutton {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n</style>\n\n<!-- src/app/app.component.html -->\n\n<link\n  href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/css/okta-sign-in.min.css\"\n  type=\"text/css\"\n  rel=\"stylesheet\"/>\n<link\n  href=\"https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.16.0/css/okta-theme.css\"\n  type=\"text/css\"\n  rel=\"stylesheet\"/>\n\n<button routerLink=\"/\"> Home </button>\n<button *ngIf=\"!isAuthenticated\" routerLink=\"/login\"> Login </button>\n<button *ngIf=\"isAuthenticated\" (click)=\"logout()\"> Logout </button>\n<button routerLink=\"/protected\"> Protected </button>\n\n<!-- \n<app-summary-list></app-summary-list>\n<app-security></app-security>\n<app-fund></app-fund> -->\n\n<nav>\n  <button routerLink= '/summary' >Summary </button>\n  <button routerLink='/fund' >Fund Summary</button>\n  <button routerLink='/security' >Security Summary</button>\n</nav>\n\n<router-outlet></router-outlet>\n<!--router views go here-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(oktaAuth, router) {
        var _this = this;
        this.oktaAuth = oktaAuth;
        this.router = router;
        this.title = 'client';
        // Subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get the authentication state for immediate use
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        // Get the authentication state for immediate use
                        _a.isAuthenticated = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.login = function () {
        this.oktaAuth.loginRedirect('/profile');
    };
    AppComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Terminates the session with Okta and removes current tokens.
                    return [4 /*yield*/, this.oktaAuth.logout()];
                    case 1:
                        // Terminates the session with Okta and removes current tokens.
                        _a.sent();
                        this.router.navigateByUrl('/');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _summary_list_summary_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary-list/summary-list.component */ "./src/app/summary-list/summary-list.component.ts");
/* harmony import */ var _fund_fund_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fund/fund.component */ "./src/app/fund/fund.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/security.component */ "./src/app/security/security.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _summary_list_summary_list_component__WEBPACK_IMPORTED_MODULE_7__["SummaryListComponent"],
                _fund_fund_component__WEBPACK_IMPORTED_MODULE_8__["FundComponent"],
                _security_security_component__WEBPACK_IMPORTED_MODULE_10__["SecurityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fund/fund.component.css":
/*!*****************************************!*\
  !*** ./src/app/fund/fund.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bmQvZnVuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fund/fund.component.html":
/*!******************************************!*\
  !*** ./src/app/fund/fund.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>funds List</mat-card-title>\n  <mat-card-content>\n\n    Enter fund: <input type=\"text\" [(ngModel)]=\"name\">\n\n    <button (click)=\"onClick()\">button</button>\n\n     <p>{{name}}</p>\n\n\n     <tr>\n      <td >totalNumberOfOrders:</td>\n      <td style=\"padding-left:5em\">totalQuantity:</td>\n      <td style=\"padding-left:5em\">totalPrice:</td>\n      <td style=\"padding-left:5em\">avgPrice:</td>\n\n  </tr>\n\n  <tr>\n      <td style=\"padding-left:5em\">{{funds.totalNumberOfOrders}}</td>\n      <td style=\"padding-left:5em\">{{funds.totalQuantity}}</td>\n      <td style=\"padding-left:5em\">{{funds.totalPrice}}</td>\n      <td style=\"padding-left:5em\">{{funds.avgPrice}}</td>\n  </tr>\n<br><br>\n  <tr *ngFor=\"let s of  funds.totalCombinableOrders\">\n      {{s}}\n  </tr>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/fund/fund.component.ts":
/*!****************************************!*\
  !*** ./src/app/fund/fund.component.ts ***!
  \****************************************/
/*! exports provided: FundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundComponent", function() { return FundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/orders/orders.service */ "./src/app/shared/orders/orders.service.ts");



var FundComponent = /** @class */ (function () {
    function FundComponent(fundServ) {
        this.fundServ = fundServ;
        this.name = 'CANA';
    }
    FundComponent.prototype.onClick = function () {
        var _this = this;
        this.fundServ.getFund(this.name).subscribe(function (data) {
            _this.funds = data;
        });
    };
    FundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fundServ.getFund(this.name).subscribe(function (data) {
            _this.funds = data;
        });
    };
    FundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fund',
            template: __webpack_require__(/*! ./fund.component.html */ "./src/app/fund/fund.component.html"),
            styles: [__webpack_require__(/*! ./fund.component.css */ "./src/app/fund/fund.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], FundComponent);
    return FundComponent;
}());



/***/ }),

/***/ "./src/app/security/security.component.css":
/*!*************************************************!*\
  !*** ./src/app/security/security.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3NlY3VyaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/security/security.component.html":
/*!**************************************************!*\
  !*** ./src/app/security/security.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Security Summary !</p>\n\nEnter Security: <input type=\"text\" [(ngModel)]=\"security\">\n\n<button (click)=\"onClick()\"> button </button>\n\n\n{{security}}\n\n<br><br>\n\n<tr>\n       <td >totalNumberOfOrders:</td>\n       <td style=\"padding-left:5em\">totalQuantity:</td>\n       <td style=\"padding-left:5em\">totalPrice:</td>\n       <td style=\"padding-left:5em\">avgPrice:</td>\n \n   </tr>\n \n   <tr>\n       <td style=\"padding-left:5em\">{{saveSecurity.totalNumberOfOrders}}</td>\n       <td style=\"padding-left:5em\">{{saveSecurity.totalQuantity}}</td>\n       <td style=\"padding-left:5em\">{{saveSecurity.totalPrice}}</td>\n       <td style=\"padding-left:5em\">{{saveSecurity.avgPrice}}</td>\n   </tr>\n <br><br>\n   <tr *ngFor=\"let s of  saveSecurity.totalCombinableOrders\">\n       {{s}}\n   </tr>"

/***/ }),

/***/ "./src/app/security/security.component.ts":
/*!************************************************!*\
  !*** ./src/app/security/security.component.ts ***!
  \************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/orders/orders.service */ "./src/app/shared/orders/orders.service.ts");



var SecurityComponent = /** @class */ (function () {
    function SecurityComponent(securityServ) {
        this.securityServ = securityServ;
        this.security = 'APPL';
    }
    SecurityComponent.prototype.onClick = function () {
        var _this = this;
        this.securityServ.getSecurity(this.security).subscribe(function (data) {
            _this.saveSecurity = data;
        });
    };
    SecurityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.securityServ.getSecurity(this.security).subscribe(function (data) {
            _this.saveSecurity = data;
        });
    };
    SecurityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.css */ "./src/app/security/security.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/shared/orders/orders.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/orders/orders.service.ts ***!
  \*************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
    }
    OrdersService.prototype.getSummary = function () {
        return this.http.get('http://localhost:8081/api/summary');
    };
    OrdersService.prototype.getFund = function (fund) {
        return this.http.get('http://localhost:8081/api/fund/' + fund);
    };
    OrdersService.prototype.getSecurity = function (sec) {
        return this.http.get('http://localhost:8081/api/security/' + sec);
    };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/summary-list/summary-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/summary-list/summary-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n    border: 2px solid black;\n}\ntr.row2 td {\n    padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS1saXN0L3N1bW1hcnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdW1tYXJ5LWxpc3Qvc3VtbWFyeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG50ci5yb3cyIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/summary-list/summary-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/summary-list/summary-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>summary List</mat-card-title>\n  <mat-card-content>\n    <mat-list>\n\n        <tr>\n            <td >totalNumberOfOrders:</td>\n            <td style=\"padding-left:5em\">totalQuantity:</td>\n            <td style=\"padding-left:5em\">totalPrice:</td>\n            <td style=\"padding-left:5em\">avgPrice:</td>\n\n        </tr>\n\n        <tr>\n            <td style=\"padding-left:5em\">{{summary.totalNumberOfOrders}}</td>\n            <td style=\"padding-left:5em\">{{summary.totalQuantity}}</td>\n            <td style=\"padding-left:5em\">{{summary.totalPrice}}</td>\n            <td style=\"padding-left:5em\">{{summary.avgPrice}}</td>\n        </tr>\n<br><br>\n        <tr *ngFor=\"let s of summary.totalCombinableOrders\">\n            {{s}}\n        </tr>\n\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/summary-list/summary-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/summary-list/summary-list.component.ts ***!
  \********************************************************/
/*! exports provided: SummaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryListComponent", function() { return SummaryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/orders/orders.service */ "./src/app/shared/orders/orders.service.ts");



var SummaryListComponent = /** @class */ (function () {
    function SummaryListComponent(sumServ) {
        this.sumServ = sumServ;
    }
    SummaryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sumServ.getSummary().subscribe(function (data) {
            _this.summary = data;
        });
    };
    SummaryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-list',
            template: __webpack_require__(/*! ./summary-list.component.html */ "./src/app/summary-list/summary-list.component.html"),
            styles: [__webpack_require__(/*! ./summary-list.component.css */ "./src/app/summary-list/summary-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_orders_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], SummaryListComponent);
    return SummaryListComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/idexcel/Desktop/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map