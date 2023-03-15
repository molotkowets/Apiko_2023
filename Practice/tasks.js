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

////////// lesson 10 task 2

function calculateSumOfArray() {
  let sum = 0;
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  for (let i = 0; i < initialArray.length; i++) {
    // console.log(initialArray);

    if (typeof initialArray[i] == "number") {
      sum += initialArray[i];
    }
  }
  console.log(sum);
}

calculateSumOfArray();
