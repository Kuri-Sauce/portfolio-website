console.log('Hello world! Who wants a high five?')

var age = 39
var name = 'Kari'
var personParent = {
  name: name,
  age: age
}

console.log(personParent, 'WatchGuide and Tasty Vegan are currently under construction. In the meantime, please enjoy the jpg version of my case studies.')
console.log(personParent, 'I enjoy binge watching my life away whilst eating bon bons.')

// What is menuToggle? where is this coming from? is this coming from jQuery?//
// Is .getElementById from the library too?//

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
