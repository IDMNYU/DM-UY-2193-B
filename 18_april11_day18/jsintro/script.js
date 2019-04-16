//console.log('the button is clicked!'); // prints to the console, can be used to debug code

//defining variables
//placeholder for data that could be subject to change


//ES5 uses var
//ES6 uses const and let to define variables

//variables can hold different kinds of data
//strings are sequences of characters between quotation marks
//floats (decimals) and integers (whole numbers)
//booleans: true/false values
//null

var firstName = 'Sarah'
var lastName = 'Dahnke'

//concatenation
//console.log(firstName + ' ' + lastName);
//console.log('Sarah' + 'Dahnke') //also concatenation
//console.log(firstName + lastName);
//console.log(firstName, lastName);

//storing an integer
var num1 = '5'

//storing a float
var num2 = 5.4

var num3 = 4

//55.44

//console.log(num1 + (num2 + num3)); //contains the math function

//basic math functions
// add +
//subtract -
//multiply *
//divide /

//creating an array
//arrays are a list

var firstArray = ['bert', 'ernie', 'big bird', 'snuffie']
var secondArray = ['kermit', 'miss piggy', 'gonzo', 'swedish chef']
var thirdArray = [firstArray, secondArray] //multidemnsional array

//console.log(firstArray);
//console.log(firstArray[2]);
//console.log(secondArray);

//console.log(thirdArray[1][2]);
//what value to expect? //gonzo //big bird


//control flow: decision making 
//if and else statements
//comparison:
//===
//>
//<
//>=
//<=

//var num = 9
//
////equality in js can be == or ===
////=== referrs to STRICT equality
//if (num === 10){
//    console.log('your number is correct')
//}else if(num > 10){
//    console.log('your number is too big')
//}else{
//    console.log('choose a new number')
//}

var num = 9

//if (num === 10){
//    alert('your number is correct')
//}else if(num > 10){
//    alert('your number is too big')
//}else{
//    alert('choose a new number')
//}

//creating functions
//what is a function?
//perform operations, they can called to perform those operations over and over
//could contain conditional statements and/or variables
//are operations or methods

//set up the function
function sayHello(){
    console.log('hellllooooooooo')
}

//call the function
sayHello()

//setting up a function arguments
function addNumber(numberOne, numberTwo){
    return numberOne + numberTwo //return exit the function
}

console.log(addNumber(40, 60));

//create a function that acts like a virtual door
//if we call door #1, we will return tacos
//if we call door #2, we will return pizza
//if we call door #3, we will get bagels

//function will contain a console.log or alert
//will contain an if/else if/else statement

//test each of your doors by calling the function at least 3 times

function virtualDoor(doorNum){
    if (doorNum === 1){
        alert('tacos')
    }else if (doorNum === 2){
        alert('pizza')
    }else if (doorNum === 3){
        return 'bagels'
    }else{
        alert('pick a different door!')
    }
}
//call function with doorNum
//virtualDoor(1);
//virtualDoor(2);
//virtualDoor(3);
//virtualDoor(5);









































