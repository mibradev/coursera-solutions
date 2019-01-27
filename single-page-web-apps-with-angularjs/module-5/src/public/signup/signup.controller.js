(function() {
  "use strict";

  angular.module("public").controller("SignupController", SignupController);

  SignupController.$inject = ["MenuService", "UserService"];
  function SignupController(MenuService, UserService) {
    var self = this;

    self.user = UserService.getInfo();

    self.getMenuItem = function(form) {
      self.user.favoriteItem = null;
      UserService.info = self.user;

      if (form.$valid) {
        form.$setPristine();

        if (self.user.menuNumber) {
          MenuService.getMenuItem(self.user.menuNumber).then(function(result) {
            self.user.favoriteItem = result;
          });
        }
      }
    };
  }
})();
