//addition
var foo = 5;
var bar = 5;
alert(foo + bar);  //10


//concatination
var foo = "5";
var bar = "5";
alert(foo + bar);  //55

//if one is a string you get concatination
var foo = 5;
var bar = "5";
alert(foo + bar);  //55


//this makes no sense
var foo = 5;
var bar = "b";
alert(foo * bar);  //NaN (not a number)

//Not a Number
var foo = "55"  //could be "abc"
var myNumber = Number(foo);  //only works if the string is a number

//so we check it instead
//to check if it IS a number then you should
// "!isNan(myNumber)" which means is Not Not a Number
if(isNaN(myNumber)) //checks if it is NOT a number
{
  alert("It's not a number!");
}
