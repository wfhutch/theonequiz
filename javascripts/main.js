var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function sortedPlanets(planets) {
  var order = planets.sort();
  return order;
};

var sorted = sortedPlanets(Planets);
console.log(sorted);

function reversedPlanets(planets) {
  return planets.join().split('').reverse().join('');
};

var reversed = reversedPlanets(Planets);
console.log(reversed);

function longPlanets(Planets) {
  if (Planets.length >= 7) {
    return Planets;
  }
};

var longestPlanets = Planets.filter(longPlanets);
console.log(longestPlanets);

document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

$("#jquery_output").html("This content generated with jQuery");

function modulus(a, b) {
  var diff = a % b;
  return diff;
};

var mod = modulus(20, 6);
console.log("modulus function", mod);

function add (a, b) {
  return a + b;
};

function subtract (a, b) {
  return a - b;
};

function doMath(a, b, c) {
   return c(a, b);
};

var addNums = doMath(10, 5, add);
console.log("doMath add", addNums);

var subNums = doMath(20, 10, subtract);
console.log("doMath subtract", subNums);

function getAnimals() {
  $.ajax ({
    url: "data/animals.json"
  })
  .done(function(data) {
    console.log(data);
    var animalArray = [];
    for (i=0; i<data.animals.length; i++) {
      animalArray.push(data.animals[i].type);
    }
      console.log("ajax animals", animalArray);
  })
};

getAnimals();
