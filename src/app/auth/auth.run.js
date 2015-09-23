(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .run(run);

  /** @ngInject */
  function run($rootScope, $state, AuthStorage, AuthService) {

    // Try and load user and token from storage if they are not authenticated
    if (!AuthStorage.isAuthenticated()) {
      AuthStorage.setDataFromStorage();
    }

    // Set Authorization header
    AuthService.setAuthHeaders();

    // States that do not require auth
    var allowedStates = ['login', 'register', 'forgot-password'];

    // Redirect to login if user is not authenticated
    $rootScope.$on('$stateChangeStart', function (event, toState) {

      if (allowedStates.indexOf(toState.name) < 0 && !AuthStorage.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();