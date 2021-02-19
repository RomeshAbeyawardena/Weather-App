(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Root\WeatherApp\WeatherApp.Client\WebApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0TY7":
/*!*********************************************!*\
  !*** ./src/app/weather-card/weathercard.ts ***!
  \*********************************************/
/*! exports provided: WeatherCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCard", function() { return WeatherCard; });
class WeatherCard {
    constructor(dayOfWeek, temperature, iconShortHand, isCurrentDayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        this.temperature = temperature;
        this.iconShortHand = iconShortHand;
        this.isCurrentDayOfWeek = isCurrentDayOfWeek;
    }
}


/***/ }),

/***/ "7EaL":
/*!******************************************!*\
  !*** ./src/app/weather-image.service.ts ***!
  \******************************************/
/*! exports provided: WeatherImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherImageService", function() { return WeatherImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WeatherImageService {
    constructor() { }
    getWeatherImageUrl(iconShortHand) {
        return "https://www.metaweather.com/static/img/weather/png/"
            + iconShortHand
            + ".png";
    }
}
WeatherImageService.ɵfac = function WeatherImageService_Factory(t) { return new (t || WeatherImageService)(); };
WeatherImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherImageService, factory: WeatherImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "LDI7":
/*!**********************************************************!*\
  !*** ./src/app/weather-table/weather-table.component.ts ***!
  \**********************************************************/
/*! exports provided: WeatherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTableComponent", function() { return WeatherTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-data.service */ "SsZm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather-card/weather-card.component */ "nmbp");






function WeatherTableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-weather-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WeatherTableComponent {
    constructor(weatherDataService) {
        this.weatherDataService = weatherDataService;
        this.weatherData = new Array();
        this.locations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        const baseUrl = sessionStorage
            .getItem("baseApiUrl");
        if (baseUrl === null) {
            throw "baseUrl not available";
        }
        this.baseApiUrl = baseUrl;
    }
    ngOnInit() {
        console.log(this.locations, "WeatherTableComponent.ngOnInit");
        const context = this;
        this.locations
            .subscribe({
            next(locations) {
                context
                    .getWeatherData(locations);
            }
        });
    }
    getWeatherData(locations) {
        const result = this.weatherDataService.getWeatherData(this.baseApiUrl, locations[0], new Date(), new Date());
        console.log(result);
        const context = this;
        result
            .subscribe({
            next(weatherResponse) {
                context.weatherData = weatherResponse.weatherForecast;
            }
        });
    }
}
WeatherTableComponent.ɵfac = function WeatherTableComponent_Factory(t) { return new (t || WeatherTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"])); };
WeatherTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherTableComponent, selectors: [["app-weather-table"]], inputs: { locations: "locations" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"]], template: function WeatherTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherTableComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weatherData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_4__["WeatherCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWF0aGVyLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-table',
                templateUrl: './weather-table.component.html',
                styleUrls: ['./weather-table.component.scss']
            }]
    }], function () { return [{ type: _weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"] }]; }, { locations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SsZm":
/*!*****************************************!*\
  !*** ./src/app/weather-data.service.ts ***!
  \*****************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "nkFk");





class WeatherDataService {
    constructor(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.getWeatherForecast = "weather";
    }
    getWeatherData(baseUrl, locationItem, fromDate, toDate) {
        const fromDateParameter = fromDate.toISOString();
        const toDateParameter = toDate.toISOString();
        const id = locationItem.id.toString();
        const headers = this
            .configurationService
            .getHttpHeaders();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: { id, fromDateParameter, toDateParameter } });
        const response = this.httpClient.get(baseUrl + this.getWeatherForecast, { headers, params });
        return response;
    }
}
WeatherDataService.ɵfac = function WeatherDataService_Factory(t) { return new (t || WeatherDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
WeatherDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherDataService, factory: WeatherDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ "YgRC");
/* harmony import */ var _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-table/weather-table.component */ "LDI7");






class AppComponent {
    constructor(eltRef, locationService) {
        this.eltRef = eltRef;
        this.locationService = locationService;
        this.title = 'Weather App';
        const nativeElement = eltRef.nativeElement;
        this.baseApiUrl = nativeElement.getAttribute('baseapiurl');
        this.query = nativeElement.getAttribute('query');
        this.searchLocations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        sessionStorage.setItem("baseApiUrl", this.baseApiUrl);
    }
    ngOnInit() {
        const result = this.locationService.getLocation(this.baseApiUrl, this.query);
        this.searchLocations = result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((locationResponse) => locationResponse.locations));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "container"], [3, "locations"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Weather forecast for Belfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-weather-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locations", ctx.searchLocations);
    } }, directives: [_weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_4__["WeatherTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] }]; }, null); })();


/***/ }),

/***/ "YgRC":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "nkFk");





class LocationService {
    constructor(httpService, configurationService) {
        this.httpService = httpService;
        this.configurationService = configurationService;
        this.getLocationUrl = "location";
    }
    getLocation(baseUrl, query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: { query } });
        const headers = this
            .configurationService
            .getHttpHeaders();
        const response = this.httpService
            .get(baseUrl + this.getLocationUrl, { headers, params });
        return response;
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-table/weather-table.component */ "LDI7");
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-card/weather-card.component */ "nmbp");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_4__["WeatherTableComponent"],
        _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _weather_table_weather_table_component__WEBPACK_IMPORTED_MODULE_4__["WeatherTableComponent"],
                    _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nkFk":
/*!******************************************!*\
  !*** ./src/app/configuration.service.ts ***!
  \******************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConfigurationService {
    constructor() { }
    getHttpHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set("x-api-key", "YzgzMzgyNjAtOTg3NC00ZTA4LWFiZDAtN2E3ZWZlM2Y2OTY4");
    }
}
ConfigurationService.ɵfac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(); };
ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nmbp":
/*!********************************************************!*\
  !*** ./src/app/weather-card/weather-card.component.ts ***!
  \********************************************************/
/*! exports provided: WeatherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function() { return WeatherCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weathercard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weathercard */ "0TY7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _weather_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather-image.service */ "7EaL");





class WeatherCardComponent {
    constructor(weatherImageService) {
        this.weatherImageService = weatherImageService;
        this.model = new _weathercard__WEBPACK_IMPORTED_MODULE_1__["WeatherCard"]("NAN", 0, "sn", false);
        this.weather = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
    }
    ngOnInit() {
    }
    getWeatherImage() {
        return this.weatherImageService
            .getWeatherImageUrl(this.model.iconShortHand);
    }
}
WeatherCardComponent.ɵfac = function WeatherCardComponent_Factory(t) { return new (t || WeatherCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_image_service__WEBPACK_IMPORTED_MODULE_3__["WeatherImageService"])); };
WeatherCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherCardComponent, selectors: [["app-weather-card"]], inputs: { weather: "weather" }, decls: 7, vars: 3, consts: [[1, "card", "weather-card"], [1, "card-header"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "text-center"]], template: function WeatherCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.dayOfWeek, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getWeatherImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.model.temperature, " \u00B0C");
    } }, styles: [".weather-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSiIsImZpbGUiOiJ3ZWF0aGVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlci1jYXJkIHtcclxuICBpbWcge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-card',
                templateUrl: './weather-card.component.html',
                styleUrls: ['./weather-card.component.scss']
            }]
    }], function () { return [{ type: _weather_image_service__WEBPACK_IMPORTED_MODULE_3__["WeatherImageService"] }]; }, { weather: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map