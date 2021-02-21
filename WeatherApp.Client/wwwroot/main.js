(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Root\WeatherApp\WeatherApp.Client\WebApp\src\main.ts */"zUnb");


/***/ }),

/***/ "3c76":
/*!***************************************************************!*\
  !*** ./src/app/services/weather-data/weather-data.service.ts ***!
  \***************************************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/configuration.service */ "rHPJ");





class WeatherDataService {
    constructor(httpClient, configurationService) {
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.getWeatherForecast = "weather";
    }
    getWeatherData(baseUrl, locationItem, totalNumberOfDays, fromDate, toDate) {
        const fromDateParameter = fromDate.toISOString();
        const toDateParameter = toDate.toISOString();
        const id = locationItem.id.toString();
        const totalDays = totalNumberOfDays.toString();
        const headers = this
            .configurationService
            .getHttpHeaders();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                id,
                totalDays,
                fromDateParameter,
                toDateParameter
            } });
        const response = this.httpClient.get(baseUrl + this.getWeatherForecast, { headers, params });
        return response;
    }
}
WeatherDataService.ɵfac = function WeatherDataService_Factory(t) { return new (t || WeatherDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
WeatherDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherDataService, factory: WeatherDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "4hj4":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: ErrorAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorAlertComponent", function() { return ErrorAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "SLR5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ErrorAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", ctx_r0.model.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.model.message, " ");
} }
class ErrorAlertComponent {
    constructor() {
        this.model = _alert__WEBPACK_IMPORTED_MODULE_1__["Alert"].default;
    }
    ngOnInit() {
    }
}
ErrorAlertComponent.ɵfac = function ErrorAlertComponent_Factory(t) { return new (t || ErrorAlertComponent)(); };
ErrorAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorAlertComponent, selectors: [["app-alert"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"]], template: function ErrorAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorAlertComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.scss']
            }]
    }], function () { return []; }, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9Ury":
/*!*******************************************************!*\
  !*** ./src/app/services/weather-data/weather-data.ts ***!
  \*******************************************************/
/*! exports provided: WeatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherData", function() { return WeatherData; });
class WeatherData {
    constructor(state, stateAbbreviation, date, temperature) {
        this.state = state;
        this.stateAbbreviation = stateAbbreviation;
        this.date = date;
        this.temperature = temperature;
    }
}
WeatherData.default = new WeatherData("", "", new Date(), 0);


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

/***/ "Ct58":
/*!**************************************************!*\
  !*** ./src/app/services/location/GeoLocation.ts ***!
  \**************************************************/
/*! exports provided: GeoLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocation", function() { return GeoLocation; });
class GeoLocation {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
GeoLocation.default = new GeoLocation(0, 0);


/***/ }),

/***/ "P12i":
/*!*******************************************************!*\
  !*** ./src/app/services/location/location.service.ts ***!
  \*******************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/configuration.service */ "rHPJ");





class LocationService {
    constructor(httpService, configurationService) {
        this.httpService = httpService;
        this.configurationService = configurationService;
        this.getLocationUrl = "location";
    }
    getLocations(baseUrl, query) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: { query } });
        const headers = this
            .configurationService
            .getHttpHeaders();
        return this.httpService
            .get(baseUrl + this.getLocationUrl, { headers, params });
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }]; }, null); })();


/***/ }),

/***/ "P7vr":
/*!****************************************************!*\
  !*** ./src/app/services/location/location-item.ts ***!
  \****************************************************/
/*! exports provided: LocationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationItem", function() { return LocationItem; });
/* harmony import */ var _GeoLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoLocation */ "Ct58");

class LocationItem {
    constructor(id, name, type, geoLocation) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.geoLocation = geoLocation;
    }
}
LocationItem.default = new LocationItem(0, "", "", _GeoLocation__WEBPACK_IMPORTED_MODULE_0__["GeoLocation"].default);


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SLR5":
/*!********************************!*\
  !*** ./src/app/alert/alert.ts ***!
  \********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
class Alert {
    constructor(type, message) {
        this.type = type;
        this.message = message;
    }
}
Alert.default = new Alert("", "");


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
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert */ "SLR5");
/* harmony import */ var _services_location_location_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/location/location-item */ "P7vr");
/* harmony import */ var _services_location_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/location/location.service */ "P12i");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _location_search_location_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location-search/location-search.component */ "ZftL");
/* harmony import */ var _weather_card_list_weather_card_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather-card-list/weather-card-list.component */ "ayS6");











function AppComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weather forecast for ", ctx_r0.location.name, "");
} }
class AppComponent {
    constructor(eltRef, locationService) {
        this.eltRef = eltRef;
        this.locationService = locationService;
        this.title = 'Weather App';
        const nativeElement = eltRef.nativeElement;
        this.getLocation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.baseApiUrl = nativeElement.getAttribute('baseapiurl');
        this.query = nativeElement.getAttribute('query');
        this.totalDays = nativeElement.getAttribute('totaldays');
        const value = nativeElement.getAttribute('displaytemperature');
        this.displayTemperature = value === 'displayTemperature';
        this.alert = _alert_alert__WEBPACK_IMPORTED_MODULE_3__["Alert"].default;
        this.searchLocations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.hasError = false;
        this.location = _services_location_location_item__WEBPACK_IMPORTED_MODULE_4__["LocationItem"].default;
        sessionStorage.setItem("baseApiUrl", this.baseApiUrl);
    }
    ngOnInit() {
        this.searchCity();
    }
    handleError(error) {
        this.alert.message = error.validationErrors[0];
        this.alert.type = "danger";
        this.hasError = true;
        this.location = _services_location_location_item__WEBPACK_IMPORTED_MODULE_4__["LocationItem"].default;
        this.getLocation.subscribe();
        return new Array(0);
    }
    getWeatherData(context, locationResponse) {
        context.searchLocations.next(locationResponse.locations);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(locationResponse);
    }
    searchCity(newValue) {
        if (newValue) {
            this.query = newValue;
        }
        const context = this;
        this.hasError = false;
        this.locationService.getLocations(this.baseApiUrl, this.query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(httpError => {
            context
                .handleError(httpError.error);
            return new Array(0);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(locationResponse => context
            .getWeatherData(context, locationResponse)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe();
    }
    weatherDataLoaded(location) {
        this.location = location;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 7, consts: [[3, "model"], [1, "row"], [1, "col-9"], ["class", "mb-3", 4, "ngIf"], [1, "col-3"], [1, "float-right"], [3, "value", "searchCity"], [3, "displayTemperature", "hasError", "totalDays", "locations", "weatherDataLoaded"], [1, "mb-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_h1_4_Template, 2, 1, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-location-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchCity", function AppComponent_Template_app_location_search_searchCity_7_listener($event) { return ctx.searchCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-weather-card-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("weatherDataLoaded", function AppComponent_Template_app_weather_card_list_weatherDataLoaded_8_listener($event) { return ctx.weatherDataLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayTemperature", ctx.displayTemperature)("hasError", ctx.hasError)("totalDays", ctx.totalDays)("locations", ctx.searchLocations);
    } }, directives: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["ErrorAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _location_search_location_search_component__WEBPACK_IMPORTED_MODULE_8__["LocationSearchComponent"], _weather_card_list_weather_card_list_component__WEBPACK_IMPORTED_MODULE_9__["WeatherCardListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_location_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] }]; }, null); })();


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
/* harmony import */ var _weather_card_list_weather_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-card-list/weather-card-list.component */ "ayS6");
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-card/weather-card.component */ "nmbp");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _location_search_location_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location-search/location-search.component */ "ZftL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _weather_card_list_weather_card_list_component__WEBPACK_IMPORTED_MODULE_4__["WeatherCardListComponent"],
        _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCardComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["ErrorAlertComponent"],
        _location_search_location_search_component__WEBPACK_IMPORTED_MODULE_8__["LocationSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _weather_card_list_weather_card_list_component__WEBPACK_IMPORTED_MODULE_4__["WeatherCardListComponent"],
                    _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCardComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
                    _alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["ErrorAlertComponent"],
                    _location_search_location_search_component__WEBPACK_IMPORTED_MODULE_8__["LocationSearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZftL":
/*!**************************************************************!*\
  !*** ./src/app/location-search/location-search.component.ts ***!
  \**************************************************************/
/*! exports provided: LocationSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSearchComponent", function() { return LocationSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class LocationSearchComponent {
    constructor() {
        this.value = "";
        this.searchIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.searchCity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    searchLocation() {
        this.searchCity.emit(this.value);
    }
    ngOnInit() {
    }
}
LocationSearchComponent.ɵfac = function LocationSearchComponent_Factory(t) { return new (t || LocationSearchComponent)(); };
LocationSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationSearchComponent, selectors: [["app-location-search"]], inputs: { value: "value" }, outputs: { searchCity: "searchCity" }, decls: 7, vars: 2, consts: [[1, "row", "mt-2"], [1, "col-9", "pr-1"], [1, "text-right"], ["type", "text", "placeholder", "City", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], [1, "col-3", "pl-0", "pr-0"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [3, "icon"]], template: function LocationSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LocationSearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("click", function LocationSearchComponent_Template_input_click_3_listener() { return ctx.searchCity; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationSearchComponent_Template_a_click_5_listener() { return ctx.searchLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.searchIcon);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location-search',
                templateUrl: './location-search.component.html',
                styleUrls: ['./location-search.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchCity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ayS6":
/*!******************************************************************!*\
  !*** ./src/app/weather-card-list/weather-card-list.component.ts ***!
  \******************************************************************/
/*! exports provided: WeatherCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardListComponent", function() { return WeatherCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather-data/weather-data.service */ "3c76");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weather-card/weather-card.component */ "nmbp");







function WeatherCardListComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-weather-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weatherDataItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weather", weatherDataItem_r2)("displayTemperature", ctx_r1.displayTemperature);
} }
function WeatherCardListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherCardListComponent_div_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.weatherData);
} }
class WeatherCardListComponent {
    constructor(weatherDataService) {
        this.weatherDataService = weatherDataService;
        this.weatherData = new Array();
        this.locations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        const baseUrl = sessionStorage
            .getItem("baseApiUrl");
        if (baseUrl === null) {
            throw "baseUrl not available";
        }
        this.baseApiUrl = baseUrl;
        this.isLoading = true;
        this.totalDays = 0;
        this.displayTemperature = false;
        this.hasError = false;
        this.weatherDataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const context = this;
        this.locations
            .subscribe({
            next(locations) {
                context.isLoading = true;
                context
                    .getWeatherData(locations);
            }
        });
    }
    getWeatherData(locations) {
        const firstLocation = locations[0];
        const result = this.weatherDataService.getWeatherData(this.baseApiUrl, firstLocation, this.totalDays, new Date(), new Date());
        const context = this;
        result
            .subscribe({
            next(weatherResponse) {
                context.weatherData = weatherResponse.weatherForecast;
                context.isLoading = false;
                context.weatherDataLoaded.emit(firstLocation);
            },
            error(errorResponse) {
                console.log("WeatherTableComponent", errorResponse);
                context.isLoading = false;
            }
        });
    }
}
WeatherCardListComponent.ɵfac = function WeatherCardListComponent_Factory(t) { return new (t || WeatherCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"])); };
WeatherCardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherCardListComponent, selectors: [["app-weather-card-list"]], inputs: { hasError: "hasError", displayTemperature: "displayTemperature", totalDays: "totalDays", locations: "locations" }, outputs: { weatherDataLoaded: "weatherDataLoaded" }, decls: 4, vars: 2, consts: [["class", "row", 4, "ngIf"], [3, "display"], [1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [3, "weather", "displayTemperature"]], template: function WeatherCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherCardListComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", !ctx.hasError && ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWF0aGVyLWNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherCardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-card-list',
                templateUrl: './weather-card-list.component.html',
                styleUrls: ['./weather-card-list.component.scss']
            }]
    }], function () { return [{ type: _services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"] }]; }, { weatherDataLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayTemperature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} }
class LoaderComponent {
    constructor() {
        this.display = false;
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { display: "display" }, decls: 1, vars: 1, consts: [["class", "loader", 4, "ngIf"], [1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 1, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  animation: spin 1s infinite linear;\n  border: solid 2vmin transparent;\n  border-radius: 50%;\n  border-right-color: #09f;\n  border-top-color: #09f;\n  box-sizing: border-box;\n  height: 20vmin;\n  left: calc(50% - 10vmin);\n  position: fixed;\n  top: calc(50% - 10vmin);\n  width: 20vmin;\n  z-index: 1;\n}\n.loader[_ngcontent-%COMP%]:before {\n  animation: spin 2s infinite linear;\n  border: solid 2vmin transparent;\n  border-radius: 50%;\n  border-right-color: #3cf;\n  border-top-color: #3cf;\n  box-sizing: border-box;\n  content: \"\";\n  height: 16vmin;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 16vmin;\n}\n.loader[_ngcontent-%COMP%]:after {\n  animation: spin 3s infinite linear;\n  border: solid 2vmin transparent;\n  border-radius: 50%;\n  border-right-color: #6ff;\n  border-top-color: #6ff;\n  box-sizing: border-box;\n  content: \"\";\n  height: 12vmin;\n  left: 2vmin;\n  position: absolute;\n  top: 2vmin;\n  width: 12vmin;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFDSjtBQUVFO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUFKO0FBSUE7RUFDRTtJQUNFLHlCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGJvcmRlcjogc29saWQgMnZtaW4gdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzA5ZjtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjMDlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAyMHZtaW47XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHZtaW4pO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTB2bWluKTtcclxuICB3aWR0aDogMjB2bWluO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJ2bWluIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjM2NmO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNjZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAxNnZtaW47XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE2dm1pbjtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDNzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGJvcmRlcjogc29saWQgMnZtaW4gdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM2ZmY7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEydm1pbjtcclxuICAgIGxlZnQ6IDJ2bWluO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAydm1pbjtcclxuICAgIHdpZHRoOiAxMnZtaW47XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _weather_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-card */ "uUDC");
/* harmony import */ var _services_weather_data_weather_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather-data/weather-data */ "9Ury");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_weather_image_weather_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/weather-image/weather-image.service */ "zDp8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WeatherCardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.model.temperature, " \u00B0C");
} }
class WeatherCardComponent {
    constructor(weatherImageService) {
        this.weatherImageService = weatherImageService;
        this.model = _weather_card__WEBPACK_IMPORTED_MODULE_1__["WeatherCard"].default;
        this.displayTemperature = false;
        this.weather = _services_weather_data_weather_data__WEBPACK_IMPORTED_MODULE_2__["WeatherData"].default;
    }
    ngOnInit() {
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_3__();
        const forecastDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.weather.date);
        this.model.date = forecastDate.format("DD MMM yyyy");
        this.model.isCurrentDayOfWeek = forecastDate.isSame(currentDate, "day");
        this.model.dayOfWeek = forecastDate.format("dddd");
        this.model.iconShortHand = this.weather.stateAbbreviation;
        this.model.temperature = Math.round(this.weather.temperature);
        this.model.displayTemperature = this.displayTemperature;
    }
    getWeatherImage() {
        return this.weatherImageService
            .getWeatherImageUrl(this.model.iconShortHand);
    }
}
WeatherCardComponent.ɵfac = function WeatherCardComponent_Factory(t) { return new (t || WeatherCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_image_weather_image_service__WEBPACK_IMPORTED_MODULE_4__["WeatherImageService"])); };
WeatherCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherCardComponent, selectors: [["app-weather-card"]], inputs: { displayTemperature: "displayTemperature", weather: "weather" }, decls: 7, vars: 6, consts: [[1, "card", "weather-card", "mb-sm-4", "mb-2"], [3, "title", "ngClass"], ["alt", "...", 1, "card-img-top", 3, "src"], ["class", "card-body", 4, "ngIf"], [1, "card-footer", "bg-white", "text-muted", "text-center"], [1, "card-body"], [1, "card-title", "text-center"]], template: function WeatherCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherCardComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.model.date)("ngClass", ctx.model.isCurrentDayOfWeek ? "card-header bg-primary text-light text-center" : "card-header bg-info text-light text-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.dayOfWeek, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getWeatherImage(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.displayTemperature);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.date, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".weather-card[_ngcontent-%COMP%] {\n  min-width: 190px;\n  max-width: 228px;\n}\n.weather-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFFO0VBQ0UsYUFBQTtBQUVKIiwiZmlsZSI6IndlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWF0aGVyLWNhcmQge1xyXG4gICAgbWluLXdpZHRoOiAxOTBweDtcclxuICAgIG1heC13aWR0aDogMjI4cHg7XHJcbiAgaW1nIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-card',
                templateUrl: './weather-card.component.html',
                styleUrls: ['./weather-card.component.scss']
            }]
    }], function () { return [{ type: _services_weather_image_weather_image_service__WEBPACK_IMPORTED_MODULE_4__["WeatherImageService"] }]; }, { displayTemperature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], weather: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rHPJ":
/*!*****************************************************************!*\
  !*** ./src/app/services/configuration/configuration.service.ts ***!
  \*****************************************************************/
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

/***/ "uUDC":
/*!**********************************************!*\
  !*** ./src/app/weather-card/weather-card.ts ***!
  \**********************************************/
/*! exports provided: WeatherCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCard", function() { return WeatherCard; });
class WeatherCard {
    constructor(dayOfWeek, date, temperature, iconShortHand, isCurrentDayOfWeek, displayTemperature) {
        this.dayOfWeek = dayOfWeek;
        this.date = date,
            this.temperature = temperature;
        this.iconShortHand = iconShortHand;
        this.isCurrentDayOfWeek = isCurrentDayOfWeek;
        this.displayTemperature = displayTemperature;
    }
}
WeatherCard.default = new WeatherCard("", "", 0, "", false, false);


/***/ }),

/***/ "zDp8":
/*!*****************************************************************!*\
  !*** ./src/app/services/weather-image/weather-image.service.ts ***!
  \*****************************************************************/
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