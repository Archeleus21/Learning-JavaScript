// define several functions
function firstFunction() {
    secondFunction();
}
function secondFunction() {
    thirdFunction();
}
function thirdFunction() {
    fourthFunction();
}
function fourthFunction() {
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element
var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
    //alert("Just about to call the first function");
    firstFunction();
    //alert("i've called first function");
};
//use tracing to trace down your errors in the code
//basic concept but works for small programs
