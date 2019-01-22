(function() {
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuy;

    toBuy.moveToAlreadyBought = function(itemIndex) {
      ShoppingListCheckOffService.moveToAlreadyBought(itemIndex);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.alreadyBought;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuy = [
      {name: "cookies", quantity: 10},
      {name: "broccolies", quantity: 3},
      {name: "apples", quantity: 5},
      {name: "chipse", quantity: 4},
      {name: "bananas", quantity: 6}
    ];

    service.alreadyBought = [];

    service.moveToAlreadyBought = function(itemIndex) {
      var removedItem = service.toBuy.splice(itemIndex, 1)[0];

      service.alreadyBought.push(removedItem);
    };
  }
})();
