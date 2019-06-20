//understanding variable scope

var y;

function SimpleFunctionTwo()
{
  //these variables are local to this function
  //and there for only live and die here and
  //cannot be used outside of this function
  y = 500;
  alert(y);
}

function SimpleFunctionOne()
{
  //these variables are local to this function
  //and there for only live and die here and
  //cannot be used outside of this function
  var x = 500;
  alert(x);
}

SimpleFunction();
//this will not work since x does not exist
//outside the function unless declared outside function
alert(x);
//this works since y is created outside the function
alert(y);
