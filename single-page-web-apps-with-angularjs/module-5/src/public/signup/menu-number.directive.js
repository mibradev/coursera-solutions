(function() {
  "use strict";

  angular.module("public").directive("menuNumber", MenuNumber);

  MenuNumber.$inject = ["MenuService", "$q"];
  function MenuNumber(MenuService, $q) {
    return {
      require: "ngModel",
      restrict: "A",
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$asyncValidators.menuNumber = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) return $q.resolve();

          return MenuService.getMenuItem(viewValue).then(function(result) {
            if (result) return $q.resolve();

            return $q.reject();
          });
        };
      }
    }
  }
})();
