(function() {
  "use strict";

  angular.module("public").controller("MyinfoController", MyinfoController);

  MyinfoController.$inject = ["UserService"];
  function MyinfoController(UserService) {
    var self = this;

    self.info = UserService.getInfo();
  }
})();
