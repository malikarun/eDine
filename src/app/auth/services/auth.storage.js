(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .factory('AuthStorage', AuthStorage);

  /** @ngInject */
  // Handle in memory and persistent storage of user and token
  // Separated from AuthService to allow us to use this service in $http interceptors
  function AuthStorage($window) {

    var user, token;
    var store = $window.localStorage;
    var storageKeys = {
      user: 'user',
      token: 'access_token'
    };

    return {
      isAuthenticated: isAuthenticated,
      getUser: getUser,
      getToken: getToken,
      setUser: setUser,
      setToken: setToken,
      saveDataToStorage: saveDataToStorage,
      setDataFromStorage: setDataFromStorage,
      clear: clear
    };

    // Simple check to see if the user has authenticated
    function isAuthenticated() {
      return typeof token === 'string' && token.length > 0;
    }

    // Get in memory user data
    function getUser() {
      return user;
    }

    // Get in memory auth token
    function getToken() {
      return token;
    }

    // Sets the in memory user data
    function setUser(newUser) {
      user = newUser;
    }

    // Sets the in memory auth token
    function setToken(newToken) {
      token = newToken;
    }

    // Save user data and token to storage
    function saveDataToStorage() {

      if (user) {
        store.setItem(storageKeys.user, JSON.stringify(user));
      }

      if (token) {
        store.setItem(storageKeys.token, token);
      }
    }

    // Clears user and token from storage
    function clearDataFromStorage() {
      store.removeItem(storageKeys.token);
      store.removeItem(storageKeys.user);
    }

    // Clears user and token from memory
    function clearDataFromMemory() {
      user = null;
      token = null;
    }

    // Set user and token from data saved in storage
    function setDataFromStorage() {
      user = JSON.parse(store.getItem(storageKeys.user));
      token = store.getItem(storageKeys.token);
    }

    // Convenience method to clear both memory and persistent storage
    function clear() {
      clearDataFromMemory();
      clearDataFromStorage();
    }
  }
})();