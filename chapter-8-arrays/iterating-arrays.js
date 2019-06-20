//how to iterate through arrays

var myArray = [10, 20, "test", TRUE, 99];

//start index at zero
var i = 0;

//loop and condition, you can use while, do while, or for loops
while(i < myArray.length)
{
  //print each element
  alert("This value is: " + myArray[i]);
  //increment
  i++;
}

var mySecondArray = [500, 500, 500, 500, 500];

var total = 0;
//index; condition; increment
for (var i = 0; i < mySecondArray.length; i++)
{
  //add array elements together
  total += mySecondArray[i];
}

//print total
alert("The total is: " + total);
