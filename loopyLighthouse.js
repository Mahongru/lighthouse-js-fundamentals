// loopyLighthouse 2
// Inital testing variables

/*  var range = [15, 90];
    var multiples = [2, 5];
    var words = ["Batty", "Beacon"]; */

function loopyLighthouse (range, multiples, words) {



  for (i = range[0]; i <= range[1]; i++) {

    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] +  words[1]);
    }
    else if (i % multiples[1] === 0) {
      console.log(words[1]);
    }
    else if (i % multiples[0] === 0) {
      console.log(words[0]);
    }
    else {
      console.log(i);
    }
  }
}

// loopyLighthouse([50, 100],[2, 5],["Beaty", "Beacon"]);




// loopyLighthouse 1

function loopyLoop () {

  for(var i = 100; i <= 200; i++) {


    if ((i % 3 === 0) && (i % 4 === 0)) {
      console.log("LoopyLighthouse")
    }
    else if (i % 4 === 0) {
      console.log("Lighthouse")
    }
     else if (i % 3 === 0) {
      console.log("Loopy")
    }
    else {
      console.log(i)
    }
  }
}

// loopyLoop();