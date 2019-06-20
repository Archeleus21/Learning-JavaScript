//strings

var phrase = "This is a simple phrase.";
alert(phrase.length);  //gets number of characters in the string

alert(phrase.toUpperCase());  //converts string to upper case letters

//these are not equal
var str1 = "Hello";
var str2 = "hello";
//unless
if(str1.toLowerCase() == str2.toLowerCase())
{
  alert("Yes, equal");
}

//find certain words in a string
var phrase = "We want a groovy keyword.";

var position = phrase.indexOf("groovy");  //will return the first letter position, which is 10
//will return -1 if it is not found
if(phrase.indexOf("DDDD") == -1)
{
  alert("That word does not occur.");
}

//theseis also .lastIndexOf()
//which will give us the last position of the string

//we can break strings apart using " .slice()"
var pharse = "Yet another phrase.";
            //0123456
var segment = phrase.slice(6,11); //other

//there is .substring() or .substr()


//there is also greater than and less than
var str1 = "aardvark";
var str2 = "beluga";
if (str1 < str2) { ....}  //true

var str1 = "aardvark";
var str2 = "Beluga";
if (str1 < str2) { ....}  //false!
//ABCD...  less than   abcd...
