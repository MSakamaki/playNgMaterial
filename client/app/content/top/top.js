'use strict';

angular.module('playNgMaterialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.top', {
        url: '^/top',
        views: {
          content: {
            templateUrl: 'app/content/top/top.html',
            controller: 'TopCtrl'
          }
        }
      });
  });