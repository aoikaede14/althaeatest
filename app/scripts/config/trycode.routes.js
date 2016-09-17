'use strict';

angular.module('myApp').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('trycode', {
        templateUrl: 'views/common/main.html'
      })
      .state('trycode.main', {
        views: {
          "header@trycode": {
            templateUrl: 'views/common/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
          },
          "main@trycode": {
            templateUrl: 'views/trycode/content.html'
          }
        }
      });
  }]);
