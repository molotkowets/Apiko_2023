////////// lesson 10 task 1

// function printPowsOf2(number) {
//   if (typeof number == "number") {
//     let iterationNumber = 1;
//     while (iterationNumber < number) {
//       iterationNumber *= 2;
//       console.log(iterationNumber);
//     }
//   } else {
//     console.log("incorrect type");
//   }
// }

// printPowsOf2("302");
// printPowsOf2(null);
// printPowsOf2(128);
// printPowsOf2(60);

////////// lesson 10 task 2

// function calculateSumOfArray() {
//   let sum = 0;
//   const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
//   for (let i = 0; i < initialArray.length; i++) {
//     // console.log(initialArray);

//     if (typeof initialArray[i] == "number") {
//       sum += initialArray[i];
//     }
//   }
//   console.log(sum);
// }

// calculateSumOfArray();

////////// lesson 10 task 3

// function printSeasonByMonth(month) {
//   const seasons = {
//     winter: ["DECEMBER", "JANUARY", "FEBRUARY"],
//     spring: ["MARCH", "APRIL", "MAY"],
//     summer: ["JUNE", "JULY", "AUGUST"],
//     fall: ["SEPTEMBER", "OCTOBER", "NOVEMBER"],
//   };

//   const namesSeasons = Object.keys(seasons);

//   for (let i = 0; i < namesSeasons.length; i++) {
//     if (seasons[namesSeasons[i]].includes(month.toUpperCase())) {
//       console.log(namesSeasons[i]);
//       break;
//     } else if (i === namesSeasons.length - 1) {
//       console.log("invalid month");
//     }
//   }
// }

// printSeasonByMonth("SEPTEMBER");
// printSeasonByMonth("NOVEMBER");
// printSeasonByMonth("MAi"); // error test
// printSeasonByMonth("July");
// printSeasonByMonth("APRIL");

////////// lesson 10 task 4
// .join(" ")
function calculateWordsInString(string) {
  console.log(string.replace(/[\s.,%,?]/g, " ").split(/\s+/).length);
}
calculateWordsInString("Easy   string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
