'use strict';

angular.module('playNgMaterialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        abstract:true,
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });