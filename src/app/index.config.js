(function() {
  'use strict';

  angular
    .module('eDine')
    .config(config);

  /** @ngInject */
  function config($logProvider, $ionicConfigProvider, ApiUrlProvider) {

    if(!ionic.Platform.isIOS()) {
      $ionicConfigProvider.scrolling.jsScrolling(false);
    }
    // Enable log
    $logProvider.debugEnabled(true);
    $ionicConfigProvider.tabs.position('bottom');

    ApiUrlProvider.setUrl('http://localhost:3111/api');
  }
})();