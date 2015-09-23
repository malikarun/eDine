(function() {
  'use strict';

  angular
    .module('eDine', [
      'ionic',
      'ionic-material',
      'eDine.auth',
      'eDine.tabs',
      'eDine.home'
    ]);
})();