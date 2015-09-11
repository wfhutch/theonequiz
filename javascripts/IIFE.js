var FruitMaker = (function() {
  var fruits = ["apples", "bananas", "cherries", "huckleberries"];

  return {
    getFruits: function() {
      return fruits;
    },

    addFruits: function(add) {
      fruits.push(add);
    }
  };
})();

var list = FruitMaker.getFruits();
console.log("getFruits", list);

FruitMaker.addFruits("grapes");

var newList = FruitMaker.getFruits();
console.log("added fruit", newList);
