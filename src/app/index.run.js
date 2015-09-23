(function() {
  'use strict';

  angular
    .module('eDine')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $ionicPlatform) {

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
        $cordovaStatusbar.styleColor('#057b6c');
        $cordovaStatusbar.styleHex('#057b6c');
      }
    });

    $log.debug('runBlock end');
  }
})();