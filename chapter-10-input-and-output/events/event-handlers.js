//event handlers such as
//onload, onclick, onmouseover, onblur, onfocus

//handling events
//format: element.event =
//window.onload
//nameField.onblur

//unanonomous function is an unnamed function
//this is a statement
/*myElement.onclick = function() {
  //your even handler code
  //..
  //..
};*/


//grabs the h1 section withthe ID " mainHeading"
var headline = document.getElementById("mainHeading");
//supposed to have a semi-colon at the end
headline.onclick = function(){
  //makes changes to the value of the h1 in the html
  //changes are only visual and not actually changing the html
  headline.innerHTML = "You clicked the Headline!";
};
