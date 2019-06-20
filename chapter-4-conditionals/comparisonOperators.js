var a = 5;
var b = 10;

//used assignment operator instead of comparison operator
// should be '==' not '='
//there is also '===' strict equality operator
if(a = b)
{
  //always true
}

//example of when to use '==='
var a = 123;
var b = "123";

//this will be sure even though they are different
//types of data
if( a == b)
{
  alert("Yes, they ARE equal");
}
else
{
  alert("No, they're NOT equal");
}

//if you use the '===' this wont just check the value
//it will also check the types to see if they are identicle
//this results in false
if( a === b)
{
  alert("Yes, they ARE equal");
}
else
{
  alert("No, they're NOT equal");
}

//the 'and' &&,  'or' || operators
if( a === b && c === d || a != d)
{
  //true
}
