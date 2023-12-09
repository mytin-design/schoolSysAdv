# $This model is the prototype for the Consolata School Marks entering system.

It may perform other functions such as registering students.

Add a way to add a new on the list


# bug 011
Addition of the media query at 700px, interferes with the display of registry and records tabcontents pages

## Reason - The display-grid is changed to display-unset; 
However, we do need the display to remain as grid, as javascript changes from display non to grid, alternatively.

### Solution
Consider using display grid, and change the container to 1fr instead of 1fr 8fr

#### Solved

# Bug xx001
When a container is closed in the registry area, on going back to home, the display is in grid - 

This expected from Js. 

NB: I have experienced this before; How I solved it, is a mystery.
Dealing with display grid posses lots of problems when dealing with the media query and javascript.

Now the question is: - Okay - doesn't matter; its solved;

Problem was, the container had been set to display as grid, and after removing the line script - it worked - expected display was outputted*

#### Solved

# Bug3239
When all the containers under registry are closed, the default text should be dislayed; However it doesn't

Web developer tools shows that the entire container's display is changed to 'none;


However, it should be noted that only the selected parts should hidden and not the entire container

  
//  document.querySelector(".rgshow").innerHTML = "";

Above is the line used to remove the default text 

//I think this is the cause of the problem;

//Because, once the registry area is opened, esp when a register marks or any other box is being displayed, the innerHTML removes the text, and once the boxes initiated, are terminated, the innerHTML is not re-written

-Bassicaly - even if we re-wrote, it would still be lots of work, 

Thus, instead of removing the text, remove the entire container - so that it can be re-displayed or removed with ease.

#### Solved


# dESIGN Bug2182re
The confirm dialog box's position is set using javascript;
This affects media query - as it it currently set to sit in a specified spot;


The first idea was to: 
USE A CLASS
That is - add a class, when dialog is displayed;
And change the styles of the class in media query setting


#### Solved

# Design issue 212hh

It would be great if only the central container changes and the side bar is fixed;


# log out button functionality


