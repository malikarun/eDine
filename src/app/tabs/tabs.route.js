(function() {
  'use strict';

  angular
    .module('eDine.tabs')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/tabs/tabs.html',
      controller: "TabsController"
    });
  }
})();