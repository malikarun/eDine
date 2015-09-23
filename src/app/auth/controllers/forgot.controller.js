(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .controller('ForgotController', ForgotController);

  /* @ngInject */
  function ForgotController($state, ionicMaterialInk, AuthService) {
    var ctrl = this;
    ionicMaterialInk.displayEffect();
  }
})();