(function() {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItems)
    .constant("BASE_URL", "https://davids-restaurant.herokuapp.com");

  function FoundItems() {
    var ddo = {
      restrict: "E",
      templateUrl: "foundItems.html",
      scope: {
        foundItems: "<",
        onRemove: "&"
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var list = this;

    list.searchTerm = "";
    list.removeItem = MenuSearchService.removeItem;

    list.narrowItems = function() {
      if (list.searchTerm) {
        MenuSearchService.getMatchedMenuItems(list.searchTerm).then(function(result) {
          list.found = result;
        });
      } else {
        list.found = [];
      }
    };
  }

  MenuSearchService.$inject = ["$http", "BASE_URL"];
  function MenuSearchService($http, BASE_URL) {
    var menu = this;

    menu.foundItems = [];

    menu.getMatchedMenuItems = function(searchTerm) {
      searchTerm = searchTerm.toLowerCase();

      var url = BASE_URL + "/menu_items.json";

      return $http({url: url}).then(function(result) {
        menu.foundItems = result.data.menu_items.filter(function(item) {
          return item.description.toLowerCase().includes(searchTerm);
        });

        return menu.foundItems;
      });
    };

    menu.removeItem = function(index) {
      return menu.foundItems.splice(index, 1)[0];
    };
  }
})();
