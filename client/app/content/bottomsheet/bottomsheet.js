'use strict';

angular.module('playNgMaterialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.bottomsheet', {
        url: 'bottomsheet',
        views: {
          content: {
            templateUrl: 'app/content/bottomsheet/bottomsheet.html',
            controller: 'BottomsheetCtrl'
          }
        }
      });
  });