(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/templates/login.html',
      controller: 'LoginController as loginController'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'app/auth/templates/register.html',
      controller: 'RegisterController as registerController'
    })

    .state('forgot-password', {
      url: '/forgot-password',
      templateUrl: 'app/auth/templates/forgot-password.html',
      controller: 'ForgotController as forgotController'
    });
  }
})();