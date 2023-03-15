////////// lesson 10 task 1

function printPowsOf2(number) {
  if (typeof number == "number") {
    let iterationNumber = 1;
    while (iterationNumber < number) {
      iterationNumber *= 2;
      console.log(iterationNumber);
    }
  } else {
    console.log("incorrect type");
  }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
