/*java does not care about white space
however, there are some rules that you should follow
one statement per line
and you need spaces between certain places so that
java knows what certain things are*/

var a   =   5     ;  //ok but not recommmended
var b=10;  //ok but not recommended
var c = 20;  //this is standard practice

a ++ ;  //this is ok but no space can go between the two + signs '+ +'
b--;
c += 10;

var x = true;
var z = false;

var name = prompt("what is your name?");  //spaces matter in strings
var names = prompt("What is \nyour name?");  // "\n" is a new line or a linebreak
var message = "Hello, ";
alert(message + name);  //this is concatination
