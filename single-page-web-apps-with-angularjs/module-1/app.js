(function() {
  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.check = function() {
      var dishes =
        $scope.dishes.split(",")
        .map(Function.prototype.call, String.prototype.trim)
        .filter(Boolean);

      if (dishes.length === 0) {
        $scope.message = "Please enter data first";
      } else if (dishes.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
