//Line graph
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Bar graph
// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);

// Bar graph putting array in plotly.newplot instead of trace.  
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);

// add a title and x and y axis titles
// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", trace, layout);

//bar chart
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

// pie chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);

//map function

// let words = ["these", "word","need","capitals"];
// let caps = words.map(word=>word.toUpperCase());
// console.log(caps);


// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);
//or
// var numbers = [1,2,3,4,5];
// var squared = numbers.map(number=> number*number);
// console.log(squared);

// use map to add 5 to each number in the array. 
// var numbers=[0,2,4,6,8];
// // var addFive = numbers.map(function(number){
// //     return number + 5;
// // });
// //or
// var addFive= numbers.map(number=> number+5);
// console.log(addFive);

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// for loop method vs filter method to get even numbers
//let numbers = [13,22,36,54,55]
// let evenNumbers = []
// numbers.forEach(function(number){
//     if (number % 2==0) {
//         evenNumbers.push(number)
//     }
// })
//vs
// let evenNumbers = numbers.filter(number=> number%2==0);
// console.log(evenNumbers);

// var numbers = [1,2,3,4,5];
// var larger = numbers.filter(function(num){
//     return num > 1;
// });
// console.log(larger);

// example
// var familyAge = [2,3,39,37,9];
 
// var olderThanFive = familyAge.filter(function(age){
//     return age > 5;
// });
// console.log(olderThanFive);

//example 2 (didn't work using regex)
// var words = ['seal','dog','scorpion','orangutan','salamander'];
// var namesStartS=words.filter(word=>word[0]==='s');
// console.log(namesStartS);


//another way to use arrow to replace anonymous funtion
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

//sorting
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

//another way to write this
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);
// console.log(sortedAge);

//reverse sort
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.reverse((a,b) => a - b);
// console.log(sortedAge);
//or
// var familyAge = [3,2,39,37,9];
// sortedAge = familyAge.sort((a,b) => b - a);

//slice the elements of an array(first 2)
// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);
// console.log(slice1);

// slice to the end
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );
// console.log(words);




