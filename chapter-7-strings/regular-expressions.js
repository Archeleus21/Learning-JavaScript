//regular expressions
//they are built into many programming languages
//not pleasant, but useful
//2 parts:  create expressions, try and apply is and ask if it matches
//example:

var myRE = /hello/;  //this is shorthand that the forward slash marks it as a regular expression
//or like this
var myRE = new RegExp("hello");  //long hand
//this createa a new object
//now lets test it
var myString =  "Does this sentence have the word hello in it?";
if(myRE.test(myString))
{
  alert("Yes");
}


//creating patterns
var myRE = /^hello/;  //^ has to be at the start
var myRE = /hello$/;  // $ has to be at the end
var myRE = /hel+o/;  // + 'l' needs to be once or more
//"helo", "hello", "helllllllo"
var myRE = /hel*o/;  // * 'l' needs zero or more
//"heo", "helo", "hello", "helllllllo"
var myRE = /hel?o/;  // ? 'l' needs to be zero or one
//"heo", "helo"
var myRE = /hello|goodbye/;  // | either|or
var myRe = /he..o/;  // . any character
var myRE = /\wello/;  // \w can be aplhanumeric or _
var myRE = /\bhello/;  // \b word bounder (a space or new line)
var myRE = /[crnld]ope/;  // [...] range of chars  looking for cope, rope, nope, dope, lope

//even more specific and jibberish is:
//zip code
var myRE = /^[0-9]{5}(?:-[0-9]{4})?$/;
//email address
var myRE = /^[a-zA0-9._-]+@[a-zA0-9._-]+\.[a-zA-Z]{2,4}$/;
