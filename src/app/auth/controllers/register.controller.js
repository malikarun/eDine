(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .controller('RegisterController', RegisterController);

  /* @ngInject */
  function RegisterController($state, ionicMaterialInk, AuthService) {
    var ctrl = this;
    ionicMaterialInk.displayEffect();

    ctrl.register = function (){
      AuthService
      .register(ctrl.email, ctrl.password)
      .success(function() {
        // Success, go to the broadcasts
        $state.go('tab.home');

      })
      .error(function(msg) {

        // If message is null then this must be a connection error
        if (msg === null) {
          ctrl.errorMsg = 'There was a problem connecting to the server, please wait 5 minutes and try again.';
        } else {

          // Display error notification with the message
          ctrl.errorMsg = msg;
        }
      });
    };
  }
})();