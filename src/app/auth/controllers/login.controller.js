(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state, ionicMaterialInk, AuthService, $auth, $log) {
    var ctrl = this;
    ionicMaterialInk.displayEffect();

    // ctrl.authenticate = function (){
    //   AuthService
    //   .authenticate(ctrl.email, ctrl.password)
    //   .success(function() {
    //     // Success, go to the broadcasts
    //     $state.go('tab.home');

    //   })
    //   .error(function(msg) {

    //     // If message is null then this must be a connection error
    //     if (msg === null) {
    //       ctrl.errorMsg = 'There was a problem connecting to the server, please wait 5 minutes and try again.';
    //     } else {

    //       // Display error notification with the message
    //       ctrl.errorMsg = msg;
    //     }
    //   });
    // };
    ctrl.authenticate = function (provider) {
      $auth.authenticate(provider)
      .then(function(resp) {
        // handle success
        $log.info(resp);
      })
      .catch(function(resp) {
        // handle errors
        $log.info(resp);
      });
    };
  }
})();