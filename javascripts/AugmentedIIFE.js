var FruitMaker = (function(maker) {

  maker.slices = function(source, number) {
    var slices = [];
    var fruits = maker.getFruits();
    var item = fruits.indexOf(source);

    for (var i = 0; i < number; i++) {
      slices.push(fruits[item]);
    }

    return slices;
  };

  return maker;

}(FruitMaker));