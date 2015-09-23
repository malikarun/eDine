(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .factory('logoutOnForbiddenInterceptor', logoutOnForbiddenInterceptor);

  /** @ngInject */
  // HTTP Interceptor that logs out the user on any 401 Unauthorized response from the backend
  function logoutOnForbiddenInterceptor($q, $location, AuthStorage) {
    var success = function (response) {
      return response;
    };

    var error = function (response) {
      if (response.status === 401) {

        // Clear the users token from storage
        AuthStorage.clear();

        // Redirect them back to login page
        // We need to use $location rather than $state as $state requires $http and causes a circular dependency
        $location.path('/login');

        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    };

    return {
      'response': success,
      'responseError': error
    };
  }
})();