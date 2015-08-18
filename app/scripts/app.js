'use strict';

angular
  .module('paticaApp', [
    'ui.router',
    'controller',
    'services'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/firstPage');
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
            data:['$http',function($http){
                return $http.get('/data/a.json')
            }]
        }
     })
});

angular.module('controller',[]);
angular.module('services',[]).constant('baiduKey',"7TkAQDaq4qlHtkc88EgMu2Ss");
