'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'satellizer',
    'LocalStorageModule'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        controller: 'MainCtrl',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/controllers/main.js',
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html', 
        data : {requireLogin : true },
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.add',{
        url:'/add/:id',
        controller:'AddCtrl',
        templateUrl:'views/add.html',
        params : { data: null, },        
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/add.js'
              ]
            })
          }
        }
    })
      .state('dashboard.list',{
        url:'/list',
        controller:'ListCtrl',
        templateUrl:'views/list.html',        
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/list.js'
              ]
            })
          }
        }
    }).state('dashboard.login',{
        url:'/login',
        controller:'LoginCtrl',
        templateUrl:'views/login.html',       
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/login.js'
              ]
            })
          }
        }
        
    }).state('dashboard.register',{
        url:'/register',
        controller:'RegisterCtrl',
        templateUrl:'views/register.html',
        data : {requireLogin : false },      
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/register.js'
              ]
            })
          }
        }
        
    })
    .state('dashboard.forgot',{
        url:'/forgot',
        controller:'forgotCtrl',
        templateUrl:'views/forgot.html',
        data : {requireLogin : false },      
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/forgot.js'
              ]
            })
          }
        }
        
    })
    .state('dashboard.profile',{
        url:'/profile',
        controller:'ProfileCtrl',
        templateUrl:'views/profile.html',
        data : {requireLogin : true },      
         resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/profile.js'
              ]
            })
          }
        }
        
    })

    .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl',      
           resolve: {
            loadMyFiles:function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                'scripts/controllers/logout.js'
                ]
              })
            }
          }
      })



  }]);

    
angular.module('sbAdminApp').run(function ($rootScope, $state, $location, $auth) {
  
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {

      var shouldLogin = toState.data !== undefined
                    && toState.data.requireLogin 
                    && !$auth.isAuthenticated()  ;
      if(shouldLogin)
      {
        $state.go('dashboard.login');
        event.preventDefault();
        return;
      }

    });
});