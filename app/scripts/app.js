'use strict';

angular
  .module('paticaApp', [
    'ui.router',
    'controller',
    'services'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/login');
     $stateProvider.state('index', {
        url:'/index',
        templateUrl: 'views/index.html',
        abstract:true,
        controller:'indexController'
      }).
     state('index.login',{
        url:'^/login',
        templateUrl: 'views/login.html',
        controller:'loginController'
     }).state('index.firstPage',{
        url:'^/firstPage',
        templateUrl: 'views/firstPage.html',
        controller:'firstPageController'
     }).state('index.firstPage.fp',{
        url:'^/fp',
        templateUrl: 'views/fp.html',
        controller:'fpController',
        resolve:{
            data:['$http','$stateParams','localStorageService',function($http,$stateParams,localStorageService){
                var Num=localStorageService.get('Num');
                var Password=localStorageService.get('Password');
                return {
                    "isSupport":true,
                    "url":'',
                    "topPrompt":true,
                    "clockinToday":true,
                    "TM_Late":2,
                    "TM_LeaveEarly":3,
                    "TM_Absenteeism":4,
                    "TM_StatementNoSubmit":2,
                    "TM_StatementNoAudit":12,
                    "LM_Late":2,
                    "LM_LeaveEarly":3,
                    "LM_Absenteeism":4,
                    "LM_StatementNoSubmit":5,
                    "LM_StatementNoAudit":6
                }
                /*
                return $http.post('/FrontLogin/Login',
                {
                  Num:Num,
                  Password:Password
                });
                */
            }]
        }
     })
});

angular.module('controller',[]);
angular.module('services',[]).constant('baiduKey',"7TkAQDaq4qlHtkc88EgMu2Ss");
