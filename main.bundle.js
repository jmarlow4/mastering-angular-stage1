webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/lists/lists.module": [
		"../../../../../src/app/modules/lists/lists.module.ts",
		"lists.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"absolute-container dark-theme\">\r\n  <app-toolbar></app-toolbar>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar {\n  height: 56px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_auth_auth_module__ = __webpack_require__("../../../../../src/app/modules/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_dexie_service__ = __webpack_require__("../../../../../src/app/services/dexie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dexie_db_initializer__ = __webpack_require__("../../../../../src/app/dexie-db.initializer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_toolbar_toolbar_component__["a" /* ToolbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__modules_auth_auth_module__["a" /* AuthModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatIconRegistry */],
                __WEBPACK_IMPORTED_MODULE_10__services_dexie_service__["a" /* DexieService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_11__dexie_db_initializer__["a" /* initDefaultUser */],
                    multi: true,
                    deps: [__WEBPACK_IMPORTED_MODULE_10__services_dexie_service__["a" /* DexieService */]]
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"todoit-toolbar\">\r\n  <span>TodoIt</span>\r\n  <span class=\"spacer\"></span>\r\n  <button *ngIf=\"authenticated | async\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu\">\r\n    <mat-icon class=\"toolbar-menu\">more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #toolbarMenu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"onLogout()\">Log out</button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar.todoit-toolbar {\n  height: 56px; }\n\n.toolbar-menu-button {\n  padding: 0 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_auth_services_auth_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(_authService) {
        this._authService = _authService;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.authenticated = this._authService.authenticated;
    };
    ToolbarComponent.prototype.onLogout = function () {
        this._authService.logout();
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_auth_services_auth_service__["a" /* AuthService */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dexie-db.initializer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initDefaultUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_lists_mocks_lists_data__ = __webpack_require__("../../../../../src/app/modules/lists/mocks/lists-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_lists_mocks_tasks_data__ = __webpack_require__("../../../../../src/app/modules/lists/mocks/tasks-data.ts");


function initDefaultUser(_dexieService) {
    return function () {
        var dbUsers = _dexieService.table('users');
        var dbLists = _dexieService.table('lists');
        var dbTasks = _dexieService.table('tasks');
        dbUsers.get({ 'email': 'jdoe@domain.com' })
            .then(function (user) {
            if (!user) {
                dbUsers.put({
                    email: 'jdoe@domain.com',
                    password: 'pw1234',
                    uuid: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462'
                });
                for (var _i = 0, tasksData_1 = __WEBPACK_IMPORTED_MODULE_1__modules_lists_mocks_tasks_data__["a" /* tasksData */]; _i < tasksData_1.length; _i++) {
                    var task = tasksData_1[_i];
                    dbTasks.put(task);
                }
                for (var _a = 0, listsData_1 = __WEBPACK_IMPORTED_MODULE_0__modules_lists_mocks_lists_data__["a" /* listsData */]; _a < listsData_1.length; _a++) {
                    var list = listsData_1[_a];
                    dbLists.put(list);
                }
            }
        });
    };
}


/***/ }),

/***/ "../../../../../src/app/modules/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/modules/auth/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_form_register_form_component__ = __webpack_require__("../../../../../src/app/modules/auth/components/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_page_auth_page_component__ = __webpack_require__("../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuardService */]],
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__pages_auth_page_auth_page_component__["a" /* AuthPageComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["l" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatProgressSpinnerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_auth_page_auth_page_component__["a" /* AuthPageComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuardService */]
            ]
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/modules/auth/classes/auth-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthForm; });
var AuthForm = (function () {
    function AuthForm(snackbar) {
        this.snackbar = snackbar;
    }
    AuthForm.prototype.isEmail = function (control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/)) {
            return { noEmail: true };
        }
    };
    AuthForm.prototype.openSnackbar = function (message, styleClass) {
        this.snackbar.open(message, 'dismiss', { duration: 4000, extraClasses: [styleClass] });
    };
    return AuthForm;
}());



/***/ }),

/***/ "../../../../../src/app/modules/auth/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!working\">\n  <form [formGroup]=\"loginForm\"\n        (ngSubmit)=\"onLogin()\"\n        class=\"text-centered\">\n    \n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Email\"\n        formControlName=\"email\"\n        class=\"input\"\n        type=\"email\"/>\n      <mat-hint>jdoe@domain.com</mat-hint>\n      <mat-error *ngIf=\"!loginForm.controls.email.hasError('isEmail') && !loginForm.controls.email.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"loginForm.controls.email.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    \n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Password\"\n        formControlName=\"password\"\n        class=\"input\"\n        type=\"password\"/>\n      <mat-hint>pw1234</mat-hint>\n    </mat-form-field>\n    <br/>\n    <br/>\n    <button mat-raised-button color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"!loginForm.valid\">\n      <mat-icon>vpn_key</mat-icon>\n      <span>Login</span>\n    </button>\n  </form>\n</div>\n<div *ngIf=\"working\"\n     fxLayout=\"column\"\n     fxLayoutAlign=\"space-evenly center\">\n  <mat-spinner [strokeWidth]=\"5\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/auth/components/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/auth/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_auth_form__ = __webpack_require__("../../../../../src/app/modules/auth/classes/auth-form.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = (function (_super) {
    __extends(LoginFormComponent, _super);
    function LoginFormComponent(_fb, _authService, snackbar) {
        var _this = _super.call(this, snackbar) || this;
        _this._fb = _fb;
        _this._authService = _authService;
        _this.snackbar = snackbar;
        _this.working = false;
        return _this;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({ email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required,
                    this.isEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required],
        });
    };
    LoginFormComponent.prototype.onLogin = function () {
        var _this = this;
        this.working = true;
        this._authService.login(this.loginForm.value)
            .subscribe(function (user) {
            _this.working = false;
            console.log('user', user);
            _this.openSnackbar('Logged in as ' + user.email, 'snackbar-success');
        }, function (error) {
            _this.working = false;
            _this.openSnackbar(error, 'snackbar-error');
        }, function () {
            console.info('login completed!');
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/modules/auth/components/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/auth/components/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}(__WEBPACK_IMPORTED_MODULE_4__classes_auth_form__["a" /* AuthForm */]));



/***/ }),

/***/ "../../../../../src/app/modules/auth/components/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!working\" class=\"login-form\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSignUp()\">\n    \n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Email\"\n        formControlName=\"email\"\n        class=\"input\"\n        type=\"email\">\n      <mat-error class=\"app-input-message\"\n           *ngIf=\"!registerForm.get('email').pristine\n            && registerForm.get('email').errors != null\n            && registerForm.get('email').errors['noEmail']\">\n        Invalid email address\n      </mat-error>\n    </mat-form-field>\n    \n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Password\"\n        formControlName=\"password\"\n        class=\"input\"\n        type=\"password\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        placeholder=\"Confirm password\"\n        formControlName=\"confirmPassword\"\n        class=\"input\"\n        type=\"password\">\n      <mat-error *ngIf=\"!registerForm.get('confirmPassword').pristine\n          && registerForm.get('confirmPassword').errors != null\n          && registerForm.get('confirmPassword').errors['passwordsNotMatch']\">\n        Passwords don't match\n      </mat-error>\n    </mat-form-field>\n    <br/>\n    <br/>\n    <button mat-raised-button color=\"primary\"\n            class=\"button is-primary is-fullwidth\"\n            type=\"submit\"\n            [disabled]=\"!registerForm.valid\">\n      <mat-icon>check</mat-icon>\n      <span>Sign Up</span>\n    </button>\n  </form>\n</div>\n<div *ngIf=\"working\"\n     fxLayout=\"column\"\n     fxLayoutAlign=\"space-evenly center\">\n  <mat-spinner [strokeWidth]=\"5\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/auth/components/register-form/register-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/auth/components/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_auth_form__ = __webpack_require__("../../../../../src/app/modules/auth/classes/auth-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterFormComponent = (function (_super) {
    __extends(RegisterFormComponent, _super);
    function RegisterFormComponent(_fb, _authService, snackbar) {
        var _this = _super.call(this, snackbar) || this;
        _this._fb = _fb;
        _this._authService = _authService;
        _this.snackbar = snackbar;
        _this.working = false;
        return _this;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.registerForm = this._fb.group({ email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required,
                    this.isEmail
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required,
                    this.isEqualPassword.bind(this)
                ])],
        });
    };
    RegisterFormComponent.prototype.onSignUp = function () {
        var _this = this;
        this.working = true;
        this._authService.createUser(this.registerForm.value)
            .subscribe(function (user) {
            _this.working = false;
            _this.openSnackbar('Logged in as ' + user.email, 'snackbar-success');
        }, function (error) {
            _this.working = false;
            _this.openSnackbar(error, 'snackbar-error');
        });
    };
    RegisterFormComponent.prototype.isEqualPassword = function (control) {
        if (!this.registerForm) {
            return { passwordsNotMatch: true };
        }
        if (control.value !== this.registerForm.controls['password'].value) {
            return { passwordsNotMatch: true };
        }
    };
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-form',
            template: __webpack_require__("../../../../../src/app/modules/auth/components/register-form/register-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/auth/components/register-form/register-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatSnackBar */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__classes_auth_form__["a" /* AuthForm */]));



/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"\r\n     fxLayoutAlign=\"space-evenly center\">\r\n<mat-card class=\"login-card\">\r\n  <mat-tab-group mat-stretch-tabs>\r\n    <mat-tab label=\"Login\">\r\n      <app-login-form></app-login-form>\r\n    </mat-tab>\r\n    <mat-tab label=\"Register\">\r\n      <app-register-form></app-register-form>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card.login-card {\n  margin-top: 80px; }\n  mat-card.login-card mat-tab-body .mat-tab-body-content {\n    overflow: hidden;\n    transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1); }\n  mat-card.login-card .mat-tab-body {\n    max-width: 320px;\n    margin-top: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthPageComponent = (function () {
    function AuthPageComponent() {
    }
    AuthPageComponent.prototype.ngOnInit = function () {
    };
    AuthPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-page',
            template: __webpack_require__("../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/auth/pages/auth-page/auth-page.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AuthPageComponent);
    return AuthPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/auth/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.authenticated.map(function (isAuth) {
            if (!isAuth) {
                _this._router.navigate(['/login']);
            }
            return isAuth;
        });
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_dexie_service__ = __webpack_require__("../../../../../src/app/services/dexie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthService = (function () {
    function AuthService(_router, _route, _dexieService) {
        this._router = _router;
        this._route = _route;
        this._dexieService = _dexieService;
        this._authState = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._authState.next(JSON.parse(localStorage.getItem('auth')));
        this._dbUsers = this._dexieService.table('users');
    }
    Object.defineProperty(AuthService.prototype, "authState", {
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this._authState.map(function (authState) { return !!authState; });
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (loginUser) {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_from__["a" /* from */])(this._dbUsers.get({ email: loginUser.email }))
            .delay(1000)
            .map(function (dbUser) {
            if (!!dbUser
                && dbUser.email === loginUser.email
                && dbUser.password === loginUser.password) {
                return dbUser;
            }
            else {
                throw Error('Incorrect email or password!');
            }
        })
            .do(function (authState) {
            delete authState.password;
            _this._authState.next(authState);
            localStorage.setItem('auth', JSON.stringify(authState));
            _this._router.navigate(['/']);
        });
    };
    AuthService.prototype.createUser = function (registerUser) {
        var _this = this;
        delete registerUser.confirmPassword;
        return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_from__["a" /* from */])(this._dbUsers.get({ email: registerUser.email }))
            .delay(1000)
            .map(function (dbUser) {
            if (!dbUser) {
                return true;
            }
            else {
                throw Error('Email already in use!');
            }
        })
            .mergeMap(function (canRegister) {
            if (canRegister) {
                return Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_from__["a" /* from */])(_this._dbUsers.add(registerUser));
            }
        })
            .do(function (uuid) {
            delete registerUser.password;
            registerUser.uuid = uuid;
            _this._authState.next(registerUser);
            localStorage.setItem('auth', JSON.stringify(registerUser));
            _this._router.navigate(['/']);
            return registerUser;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth');
        this._authState.next(null);
        this._router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__services_dexie_service__["a" /* DexieService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lists/mocks/lists-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listsData; });
var listsData = [
    {
        uuid: 'c4bbc3e9-bc6b-4785-b6fa-590b651833f4',
        title: 'Household',
        userId: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462',
        order: 0
    },
    {
        uuid: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        title: 'Shopping List',
        userId: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462',
        order: 1
    },
    {
        uuid: 'e1030a5f-041a-41cc-832d-5a6309337645',
        title: 'Make Programming Course',
        userId: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462',
        order: 2
    },
    {
        uuid: '8cfa9b48-f0ae-4e2b-ae2d-5c8fe2705215',
        title: 'Errands',
        userId: '7a01a19b-ea0a-4d4b-90c9-fa3d186d1462',
        order: 3
    }
];


/***/ }),

/***/ "../../../../../src/app/modules/lists/mocks/tasks-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasksData; });
var tasksData = [
    // Household
    {
        uuid: '3bead0a1-eb8a-4c17-84ae-56dfd02b6569',
        title: 'Wash Dishes',
        description: 'The dishes are stacking up and it\'s driving me crazy',
        dateCreated: new Date('Nov 13 2017 10:59:22'),
        dateCompleted: null,
        listId: 'c4bbc3e9-bc6b-4785-b6fa-590b651833f4',
        order: 0
    },
    {
        uuid: 'de15b837-25a4-49f4-bd8d-3037edb335fb',
        title: 'Mow Lawn',
        description: 'Grass is getting kind of tall and the HOA is hounding on me',
        dateCreated: new Date('Nov 14 2017 04:09:42'),
        dateCompleted: null,
        listId: 'c4bbc3e9-bc6b-4785-b6fa-590b651833f4',
        order: 1
    },
    {
        uuid: '60501d10-2e6b-44dc-9d88-8573c9c60b1a',
        title: 'Organize Office',
        description: 'The office is accumulating more and more papers and' +
            ' electronic artifacts.',
        dateCreated: new Date('Nov 14 2017 07:13:12'),
        dateCompleted: null,
        listId: 'c4bbc3e9-bc6b-4785-b6fa-590b651833f4',
        order: 2
    },
    {
        uuid: 'c0f2ad44-8f0d-4963-aea7-1f10634a7c73',
        title: 'Tidy Up Living Room',
        description: 'The kids keep throwing their toys everywhere. We can enlist' +
            ' their help so they can learn to put their stuff away.',
        dateCreated: new Date('Nov 12 2017 13:10:33'),
        dateCompleted: new Date('Nov 18 2017 22:41:53'),
        listId: 'c4bbc3e9-bc6b-4785-b6fa-590b651833f4',
        order: 3
    },
    // Shopping List
    {
        uuid: '48f59fa7-e52f-415d-9b7a-9ca7083e25f2',
        title: 'Soy Milk',
        description: '',
        dateCreated: new Date('Nov 16 2017 03:09:42'),
        dateCompleted: null,
        listId: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        order: 0
    },
    {
        uuid: '7cb5eb55-8e84-4db6-8118-656812866291',
        title: 'Bread',
        description: 'Whole wheat! None of that over-processed white stuff!',
        dateCreated: new Date('Nov 16 2017 04:10:12'),
        dateCompleted: null,
        listId: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        order: 1
    },
    {
        uuid: 'e2ba555f-b936-42cc-ba15-9d754f58ba30',
        title: 'Fruit',
        description: 'Apples, oranges, bananas, and pears',
        dateCreated: new Date('Nov 16 2017 04:10:31'),
        dateCompleted: null,
        listId: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        order: 2
    },
    {
        uuid: '8e3532b1-c369-410f-9857-90ad9e965dc4',
        title: 'Broccoli',
        description: '',
        dateCreated: new Date('Nov 16 2017 04:11:01'),
        dateCompleted: null,
        listId: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        order: 3
    },
    {
        uuid: '592447e4-b014-43a7-897a-22d9a5c74ee1',
        title: 'Beer',
        description: 'Because who doesn\'t love beer!?',
        dateCreated: new Date('Nov 16 2017 04:09:42'),
        dateCompleted: null,
        listId: 'f1278352-e7aa-4c6a-b019-332456a616f1',
        order: 4
    },
    // Make Programming Course
    {
        uuid: '6b26e32d-392f-4dfb-862b-77cb3b148b66',
        title: 'Create Course Project',
        description: 'Set up simple Angular 5 that demonstrates how awesome' +
            ' Angular is!',
        dateCreated: new Date('Nov 11 2017 08:43:41'),
        dateCompleted: new Date('Nov 11 2017 11:02:29'),
        listId: 'e1030a5f-041a-41cc-832d-5a6309337645',
        order: 0
    },
    {
        uuid: 'a609646f-da12-4459-8e97-929b78e3cf6c',
        title: 'Write Outline',
        description: 'Focus on writing functional applications and not a \'tour' +
            ' of features\'',
        dateCreated: new Date('Nov 11 2017 08:51:17'),
        dateCompleted: null,
        listId: 'e1030a5f-041a-41cc-832d-5a6309337645',
        order: 1
    },
    {
        uuid: 'effd5b19-824c-4d59-8070-23f883494699',
        title: 'Record Course Videos',
        description: 'Explore setting up a green screen',
        dateCreated: new Date('Nov 11 2017 08:53:03'),
        dateCompleted: null,
        listId: 'e1030a5f-041a-41cc-832d-5a6309337645',
        order: 2
    },
    {
        uuid: '516ffd3a-c522-484b-81e1-16dbeb3ac7a0',
        title: 'Grocery Shopping',
        description: 'At SuperMart then at MartSmart',
        dateCreated: new Date('Nov 20 2017 09:00:01'),
        dateCompleted: null,
        listId: '8cfa9b48-f0ae-4e2b-ae2d-5c8fe2705215',
        order: 0
    },
    {
        uuid: 'd521bfa9-7b1b-49ca-b0fd-fd3014d74fdc',
        title: 'Go to the Doctor for Check-up',
        description: 'Does this even look normal?',
        dateCreated: new Date('Nov 20 2017 09:01:08'),
        dateCompleted: null,
        listId: '8cfa9b48-f0ae-4e2b-ae2d-5c8fe2705215',
        order: 1
    },
    {
        uuid: 'd332e642-d2b1-43c8-85fe-89681c6c9051',
        title: 'Lunch with Daniel',
        description: 'At the new pizza place',
        dateCreated: new Date('Nov 20 2017 09:04:23'),
        dateCompleted: new Date('Nov 20 2017 12:53:01'),
        listId: '8cfa9b48-f0ae-4e2b-ae2d-5c8fe2705215',
        order: 2
    },
    {
        uuid: '93d7f7b2-e47e-45bc-b179-f329ca2362f2',
        title: 'Make Dinner',
        description: 'Spaghetti... the kids love it',
        dateCreated: new Date('Nov 20 2017 09:06:35'),
        dateCompleted: null,
        listId: '8cfa9b48-f0ae-4e2b-ae2d-5c8fe2705215',
        order: 3
    },
];


/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_auth_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/modules/auth/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");


var routes = [
    { path: '', redirectTo: '/lists', pathMatch: 'full' },
    {
        path: 'lists',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__modules_auth_services_auth_guard_service__["a" /* AuthGuardService */]],
        loadChildren: './modules/lists/lists.module#ListsModule',
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pages_not_found_not_found_component__["a" /* NotFoundComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/services/dexie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DexieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dexie__ = __webpack_require__("../../../../dexie/dist/dexie.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dexie_observable__ = __webpack_require__("../../../../dexie-observable/dist/dexie-observable.es.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DexieService = (function (_super) {
    __extends(DexieService, _super);
    function DexieService() {
        var _this = _super.call(this, 'ToDoItDexie') || this;
        _this.version(2).stores({
            users: '$$uuid, email, password',
            lists: '$$uuid, title, userId, order',
            tasks: '$$uuid, title, description, dateCreated, dateCompleted, listId, order'
        });
        _this.open();
        _this.on('changes', function (changes) {
            changes.forEach(function (change) {
                switch (change.type) {
                    case 1:// CREATED
                        console.log('An object was created: ' +
                            JSON.stringify(change['obj']));
                        break;
                    case 2:// UPDATED
                        console.log('An object with key ' + change.key +
                            ' was updated with modifications: ' +
                            JSON.stringify(change['mods']));
                        break;
                    case 3:// DELETED
                        console.log('An object was deleted: ' +
                            JSON.stringify(change['oldObj']));
                        break;
                }
            });
        });
        return _this;
    }
    DexieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DexieService);
    return DexieService;
}(__WEBPACK_IMPORTED_MODULE_1_dexie__["a" /* default */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map