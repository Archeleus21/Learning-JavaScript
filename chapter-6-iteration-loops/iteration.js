//while loops

var a = 1;

//infinite loop unless 'a' changes or the loops is
//forcibly broken
while (a < 10)
{
  alert(a);
  a++;  //increments a until the condition is false
}


var amount = 0;

//create index
var i = 1;
//check condition
while( i <= 10 )
{
  amount += 100;
  //increment index
  i++;
}
//print out amount
alert("The value is: " + amount);


//For loops
//(create index; condition; increment)
for( var i = 1; i < 10; i++)
{
  //do stuff
}


//DO While Loops
//index
var a = 1;

do
{
  //do stuff
  a++;  //increment
}while( a < 10 )  //condition
