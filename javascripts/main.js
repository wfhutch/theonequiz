var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function getAnimals() {
  return $.ajax({url:"data/animals.json"}).done(function(obj){ console.log(obj.animals); });
}

getAnimals();


function reversedPlanets() {
  return Planets.map(function(planet) {
    return planet.split("").reverse().join("");
  });
}

function sortedPlanets() {
  console.log("Planets.sort();",Planets.sort());
  return Planets.sort();
}

function longPlanets() {
  return Planets.filter(function(planet) {
    return planet.length >= 7;
  });
}

function modulus(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}

function add(x, y) {
  return x+y;
}

function subtract(x, y) {
  return x-y;
}

function doMath(x, y, f) {
  return f(x,y);
}

$(document).ready(function() {
  var vanilla = document.getElementById("vanilla_output");
  vanilla.innerHTML = "This content generated with vanilla JavaScript";

  $("#jquery_output").html("This content generated with jQuery");
});