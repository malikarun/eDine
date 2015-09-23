(function() {
  'use strict';

  angular
    .module('eDine.home')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

    // Each tab has its own nav history stack:
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController'
        }
      }
    });
  }
})();
