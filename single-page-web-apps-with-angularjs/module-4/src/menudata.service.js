(function() {
  "use strict";

  angular
    .module("data")
    .service("MenuDataService", MenuDataService)
    .constant("BASE_URL", "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ["BASE_URL", "$http"];

  function MenuDataService(BASE_URL, $http) {
    var menuData = this;

    menuData.getAllCategories = function() {
      return $http({
        url: BASE_URL + "/categories.json"
      }).then(function(result) {
        return result.data;
      });
    };

    menuData.getItemsForCategory = function(categoryShortName) {
      return $http({
        url: BASE_URL + "/menu_items.json",
        params: {category: categoryShortName}
      }).then(function(result) {
        return result.data.menu_items;
      });
    };
  }
})();
