var ingredients =
["eggs", "milk", "flour", "sugar", "backing soda", "baking poweder", "chocolate chips"];

var i = 0

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (var i = 0; i < ingredients.length; i++) {

  console.log (ingredients [ (ingredients.length - 1) - i ]);
}

