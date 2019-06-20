//arrays in javascript
//arrays can store multiple datatypes
var myArray = [];
myArray[0] = 50;
myArray[1] = 60;
myArray[2] = "Hello";

alert(myArray[2]);

//shorthand
var myArray = [ 50, 60, "Hello" ];

//array behaviours
//finding the length
var myArray = [10, 20, "test", true, 99];
alert(myArray.length);  //prints the length of the array which is 5

//array methods
//methods are functions that belong to an object
var myArray = [10, "a", 1, 40, 50];
myArray.reverse();  //reverse array
myArray.sort();  //sorts the array
myArray.join();  //take all elements of array and combine with commas and return them as a string

var lastElement = myArray.pop();  //the methods detaches the last element from the array, and returns that element

myArray.push(123);  //pushes element on the end of the array

//reference https:developer.mozilla.org/en/JaveScript/Reference
