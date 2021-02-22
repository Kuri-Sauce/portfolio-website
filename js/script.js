console.log("Hello world! Who wants a high five?")

var age = 39;
var name = "Kari"
var personParent = {
  name: name,
  age: age,
}

console.log(personParent, "I enjoy binge watching my life away whilst eating bon bons.")

function menuToggle() { //What is menuToggle? where is this coming from? is this coming from jQuery?//
  var x = document.getElementById('myNavtoggle'); //Is .getElementById from the library too?//
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
