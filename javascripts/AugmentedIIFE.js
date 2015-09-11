var FruitMaker = (function(fruit) {

  fruit.slices = function(name, num) {
    var slicesArray = [];
    for (i = 0; i < num; i++) {
      slicesArray.push(name);
    }
      return slicesArray;
  }

  return fruit;

})(FruitMaker);


var fruitSlices = FruitMaker.slices("oranges", 4);
console.log("slices", fruitSlices);