(function() {
  'use strict';

  angular
    .module('eDine.tabs')
    .controller('TabsController', TabsController);

  /** @ngInject */
  function TabsController($log, ionicMaterialInk) {
    var vm = this;

    ionicMaterialInk.displayEffect();
  }
})();