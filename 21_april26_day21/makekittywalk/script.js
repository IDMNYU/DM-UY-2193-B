var img = document.getElementsByTagName('img')[0]
//index [0] is optional here because we only have one image

//set the left to 0
img.style.left = '0px'

//make a function that will tell us the starting point of the left side of the cat then add to its left position

//function kittyWalk(){
//    var oldLeft = parseInt(img.style.left)
//    var newLeft = oldLeft + 1
//    img.style.left = newLeft + 'px'
//}
//
//window.setInterval(kittyWalk, 10);


//new goal: when the cat reaches the right side of the screen, have it loop back around to the left side

//screen size?
//we will be able to see where the image reaches the end of the screen
//increasing the newLeft
//comparing the size of the window with the edge of the image

//function catWalk(){
//	var oldLeft = parseInt(img.style.left);
//	//if old left is greater than the screen width, set it to 0
//	if (oldLeft > window.screen.width){
//		oldLeft = 0
//		img.style.left = oldLeft + 'px'
//	}
//	else {
//		var newLeft = oldLeft + 1;
//		img.style.left = newLeft + 'px';	
//	}
//}
//
//window.setInterval(catWalk, 10);

function catWalk(){
   //add pixels to the old left
   var oldLeft = parseInt(img.style.left)
   if (oldLeft >= window.innerWidth) {
       oldLeft = -300
   }
   var newLeft = oldLeft + 1
   img.style.left = newLeft + 'px'
}

window.setInterval(catWalk, 10)


