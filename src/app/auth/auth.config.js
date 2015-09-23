(function() {
  'use strict';

  angular
    .module('eDine.auth')
    .config(config);

  /** @ngInject */
  function config($httpProvider, $authProvider) {
    // Logout user on 401 Unauthorized
    $httpProvider.interceptors.push('logoutOnForbiddenInterceptor');

    var BaseUrl = 'http://localhost:3111/api';

    $authProvider.configure({
                       apiUrl: BaseUrl,
          tokenValidationPath: '/auth/validate_token',
                   signOutUrl: '/auth/sign_out',
        emailRegistrationPath: '/auth',
            accountUpdatePath: '/auth',
            accountDeletePath: '/auth',
       confirmationSuccessUrl: window.location.href,
            passwordResetPath: '/auth/password',
           passwordUpdatePath: '/auth/password',
      passwordResetSuccessUrl: window.location.href,
              emailSignInPath: '/auth/sign_in',
                      storage: 'cookies',
           forceValidateToken: false,
           validateOnPageLoad: true,
                     //  proxyIf: function() { return false; },
                     // proxyUrl: '/proxy',
           omniauthWindowType: 'newWindow',

      authProviderPaths: {
          github: '/auth/github',
          google: '/auth/google',
        facebook: '/auth/facebook'
      },
      tokenFormat: {
        "access-token": "{{ token }}",
          "token-type": "Bearer",
              "client": "{{ clientId }}",
              "expiry": "{{ expiry }}",
                 "uid": "{{ uid }}"
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers.expiry) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
  }
})();