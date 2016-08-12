var raining = false;
var cold = false;
var tempreture = 45;

if (!raining) {
  console.log("Leave your umbrella at home!");
} else {
  console.log("Don't forget your umbrella!");
};


if (tempreture < 0) {
  console.log("Make sure you bring a scarf!");
} else if (tempreture < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine!");
};

/*if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine!")
} */
if (tempreture < 0 || tempreture > 40){
  console.log("Maybe going outside is not such a good idea!");
} else {
console.log("Now you're ready to go outside!");
}