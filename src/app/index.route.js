(function() {
  'use strict';

  angular
    .module('eDine')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');
  }
})();