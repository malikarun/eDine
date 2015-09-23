(function() {
  'use strict';

  angular
    .module('eDine')
    .provider('ApiUrl', ApiUrl);

  function ApiUrl() {
    var url = 'http://localhost:3111/api/v1';

    this.setUrl = function (providedUrl) {
      url = providedUrl;
    };

    this.$get = function() {
      return { url: url };
    };
  }
})();