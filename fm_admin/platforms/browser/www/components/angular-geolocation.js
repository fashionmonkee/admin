/**
 *angular geolocation service based on https://github.com/arunisrael/angularjs-geolocation/
 * @version v0.1.1 - 2014-01-10
 */
"use strict";angular.module("geolocation",[]).constant("geolocation_msgs",{"errors.location.unsupportedBrowser":"Browser does not support location services","errors.location.permissionDenied":"You have rejected access to your location","errors.location.positionUnavailable":"Unable to determine your location","errors.location.timeout":"Service timeout has been reached"});angular.module("geolocation").factory("geolocation",["$q","$rootScope","$window","geolocation_msgs",function(e,t,n,r){return{getLocation:function(i){var s=e.defer();if(n.navigator&&n.navigator.geolocation){n.navigator.geolocation.getCurrentPosition(function(e){t.$apply(function(){s.resolve(e)})},function(e){switch(e.code){case 1:t.$broadcast("error",r["errors.location.permissionDenied"]);t.$apply(function(){s.resolve(r["errors.location.permissionDenied"])});break;case 2:t.$broadcast("error",r["errors.location.positionUnavailable"]);t.$apply(function(){s.resolve(r["errors.location.positionUnavailable"])});break;case 3:t.$broadcast("error",r["errors.location.timeout"]);t.$apply(function(){s.resolve(r["errors.location.timeout"])});break}},i)}else{t.$broadcast("error",r["errors.location.unsupportedBrowser"]);t.$apply(function(){s.reject(r["errors.location.unsupportedBrowser"])})}return s.promise}}}]);