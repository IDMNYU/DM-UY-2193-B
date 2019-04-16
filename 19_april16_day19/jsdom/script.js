var heading = document.getElementById('title')

var name = "Sarah's"

heading.innerText = 'Enter ' + name + ' Information'

//grabbing a group of elements with the attribute 'myClass'
//document.getElementsByClassName('myClass')

document.getElementById('main').innerHTML = '<h3> Hello World Smaller</h3>'

var paragraphs = document.getElementsByTagName('p')

console.log(paragraphs[0].innerText);

//adding an event listener 

//addEventListner requires two parameters: the type of event, the event that is occuring (callback)
//a callback is a function in a function
heading.addEventListener('click', function() {
    alert('you clicked me!')
})

function myFunction(){
    //if input is equal to the actual letter, alert them they got it right
    var letter = document.getElementById('myInput').value
    if (letter === 'c'){
        alert('You guessed correctly!')
    }else{
        alert('You guessed the wrong letter!')
    }
}

//include a few text boxes in HTML to grab a person's name, an adjective, and a noun

//write a JS function that will concatenate all of the user input into a MAD LIB. Make it funny.

// deliver the completed MAD LIB back to the user in an alert

function madLib(){
  var name = document.getElementById('myInputName').value;
  var adjective = document.getElementById('myInputAdjective').value;
  var noun = document.getElementById('myInputNoun').value;
  alert('Once upon a time, ' + name + ' flew ' + adjective + ' on a ' + noun);
}












