(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .factory('AuthService', AuthService);

  /** @ngInject */
  // Handles authentication requests and setting Authorization header
  function AuthService($http, ApiUrl, AuthStorage) {

    return {
      authenticate: authenticate,
      setAuthHeaders: setAuthHeaders
    };


    // Adds Authorization header to requests
    function setAuthHeaders() {
      var token = AuthStorage.getToken();
      if (token) {
        $http.defaults.headers.common.Authorization = token;
      } else {
        $http.defaults.headers.common.Authorization = '';
      }
    }

    // Authenticates the user with the auth server and return promise
    function authenticate(email, password) {
      return $http.post(ApiUrl.url + '/auth', {grant_type: "password", email: email, password: password})
      .success(function(data) {
        AuthStorage.setUser(data.user);
        AuthStorage.setToken(data.token);
        AuthStorage.saveDataToStorage();
        setAuthHeaders();
      })
      .error(function() {
        AuthStorage.clear();
      });
    }
  }
})();