(function() {
  "use strict";

  angular.module("common").service("UserService", UserService);

  UserService.$inject = [];
  function UserService() {
    var self = this;

    self.info = null;

    self.getInfo = function() {
      return self.info;
    }
  }
})();
