## Day 19

* REMINDER: Guest speakers next week, Tuesday April 23 in room 820 from 8:45-10:20. Class will not meet at 10:30 that day.

* Learning Logs: Ki Hyun & Sahana

* JS review: conditional statements 

* Continuing JS: functions

* Manipulating the DOM with JS

    * Using the alert function
    
    * Grabbing elements by ID, Class, Element name
    
    * Changing innerHTML
    
    * adding event listeners
    
    * functions, if statements and forms
    
* Mad Libs

### Homework: 

*Calculator*

Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

Bonus: Round the result so there are only two digits after the decimal.


Start with this webpage, which has inputs and buttons for things to calculate: 

```
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Square this number:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculate</button>
  <br><br>
  
  <label>Half this number:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>
  
  <label>
    Fraction:
    <input type="number" id="percent1-input" size="2">
  </label>
  <label>
    Whole:
    <input type="number" id="percent2-input" size="2">
  </label>
  <button id="percent-button">Calculate</button>
  <br><br>
  
  <label>Calculate area of circle with radius:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculate</button> 
  <br><br>
  <div id="solution"></div>

  
</body>
</html>
```

Add a script tag, and add your calculator functions.

For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

Push your assignment to Github, and connect it to Github Pages. Submit both the link to your live page and your source code on NYU Classes under Assignment #7.


