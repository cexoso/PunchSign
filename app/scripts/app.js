'use strict';

angular
  .module('paticaApp', [
    'ui.router',
    'controller'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/order');
     $stateProvider.state('index', {
        url:'/index',
        templateUrl: 'views/index.html',
        abstract:true,
        controller:'indexController'
      }).
     state('index.order',{
        url:'^/order',
        templateUrl: 'views/order.html'
     })
  
 
    
  });

angular.module('paticaApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
     $stateProvider
    .state('recruitment', {
      url: "/recruitment",
      templateUrl: 'views/recruitment.html',
      abstract:true
    }).state('recruitment.customerService', {
      url: "/customerService",
      templateUrl: 'views/customerService.html'
    })
  }])

angular.module('controller',[]);



// http://www.patica.com.cn/patica/html/index.html?openid=ohQRxs4EMc4dBVahHIY7HvvQ2XNM&user_access_token=OezXcEiiBSKSxW0eoylIeKgL0Csc5Fk-ftXOSB6u_ubDy-sXqSiiI98l2784Y5uMrHrNF4W4zBeG4aPxU3kbFG502-quHHSFlDR2c72MYLpe5fJXcBYLKcPMTQyF9uWJPZeSDcDnYrz0EB9rrukY6Q