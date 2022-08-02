// Web Navigator (using stack) project from codecademy: link -> https://www.codecademy.com/paths/pass-the-technical-interview-with-javascript/tracks/javascript-linear-data-structures/modules/stacks-js/projects/learn-stacks-javascript-web-navigator

/*
  This Web Navigator project simulates the navigational operations of a web browser such as:
  > opening a new web page,
  > navigating back a page and going forward a page.
  > We will use the Stack class to maintain the history of visited pages with a backPages stack and a nextPages stack.
*/

// import Stack and prompt-sync npm package.
const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();


// step 1: create the stacks

// backPages variable will stack the history of visited pages.
// nextPages variable will store currentPage before user moves to previous page.
const backPages = new Stack();
const nextPages = new Stack();

// step 2: initiate currentPage global variable : this will hold the default page.
let currentPage = "Default page";
   /* currentPage will change as user navigates:
      > if user visits an entirely new page: currentPage will stack on top of backPages && nextPages stack will be cleared
      > if user visits previous page: currentPage will stack on top of nextPages
      > if user visits next page : currentPage will stack on top of backPages */


// step 3-6 : defined 4 helper functions for basic operations of this program. note: pop method from 'Stack Class' returns the popped 'value'.

// ------------------------------ helper func 1

// showCurrentPage function will output the logs when user visits: newPage or backPage or nextPage
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log("Back page = ", backPages.peek());
  console.log("Next Page = ", nextPages.peek());
};

// ------------------------------ helper func 2

// newPage is called when user prompts a new url
const newPage = (page) => {
  // push currentPage to the backPages stack.
  backPages.push(currentPage);
  // update currentPage to be page.
  currentPage = page;
  // clear the nextPages stack.
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  // show the current page by calling the helper function defined earlier
  showCurrentPage("New: ");
};

// ------------------------------ helper func 3

// backPage is called when user nav backward a page: access the top url from backPages Stack
const backPage = () => {
  // push currentPage into nextPages stack for user to access as next page.
  nextPages.push(currentPage);
  // update current page : remove the top item from the backpages stack and set it as the current page.
  currentPage = backPages.pop();
  // display the new current page using showCurrentPage.
  showCurrentPage("Back: ");
};

// ------------------------------ helper func 4

// nextPage is called when user prompts to move forward a page: access the top url from nextPages Stack
const nextPage = () => {
  // before we update the currentPage: we push the current page onto backPages stack
  backPages.push(currentPage);
  // update current page : remove the top item from the nextPages stack and set it as the current page. pop method does this two togather
  currentPage = nextPages.pop();
  // display the new currentpage
  showCurrentPage("Next: ");
};



// ------------------------------
// User Interface Part 1
// ------------------------------

// step 7-9

// Here we created a global variable that controls the termination of a while loop that takes in user input.
let finish = false;

// This is going to control if the back and front navigation operations are enabled.
let showBack = false; // false: when backPages in epmty
let showNext = false; // false: when nextPages is empty

// Here we call the function that shows a default page when the program is started.
showCurrentPage("Default: ");


// Here we implement a while loop that utilizes the finish global variable as a condition.
      /*
        processes inside the while loop are broken up into 3 parts:
        > display the instructions to the user: line 117-147
        > prompt the user for input: line 156-157
        > process user input: line 161-181
      */

// ------------------------------
// while loop starts : when the program is initiated, finish variable is set to false and the below while loop runs the program until user toggles finish to be true(by responding q into the prompt in line 156)
// ------------------------------

while (finish === false) {

   // The following strings are used to prompt the user. These strings contain user input instructions that will be referenced in the while loop.
  const baseInfo = "\nEnter a url";
  const backInfo = "B|b for back page";
  const nextInfo = "N|n for next page";
  const quitInfo = "Q|q for quit";
  const question = "Where would you like to go today? ";

  let instructions = baseInfo;

  // ------------------------------

  // if backpages is not empty we want to append backinfo to instructions seperated by a comma.
  if (!backPages.isEmpty()) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true; // enable backward nav using showback.
  } else {
    showBack = false; // Otherwise disable backward navigation.
  }

  // if nextPages is not empty we want to append nextInfo to instructions seperated by a comma.
  if (!nextPages.isEmpty()) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true; // enable forward nav
  } else {
    showNext = false; // disable forward nav
  }

  // Here we enable the user to quit the program by adding quitinfo to instructions
  instructions = `${instructions}, ${quitInfo}.`;
  // display the final format of instructions to the user.
  console.log(instructions);


  // ------------------------------
  // User Interface Part 2 : focuses on prompting the user for input and processing user input
  // ------------------------------

  // step 14-15: Here we prompt for user input and lowercase our response without overriding the original response.

  const answer = prompt(question);
  let lowerCaseAnswer = answer.toLowerCase();

   // step 16-20: processing user input

  // this checks to see what the user input is. We only want to display a new page if it is a url string. and we want to display what that url is.
  if (lowerCaseAnswer !== "n" && lowerCaseAnswer !== "b" && lowerCaseAnswer !== "q") {
    newPage(answer);
  }
    // else if statements that navigates back and forward a page utilizing the showNext and showback statuses.
    else if (showNext === true && lowerCaseAnswer === "n") {
    // we navigate forward a page
    nextPage();
  } else if (showBack === true && lowerCaseAnswer === "b") {
    // we navigate back a page
    backPage();
  } else if (showBack === false && lowerCaseAnswer === "b") {
    // invalid input to a non-available option
    console.log("Cannot go back a page. Stack is empty.");
  } else if (showNext === false && lowerCaseAnswer === "n") {
    // invalid input to a non-available option
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    // here we allow the user to quit the program.
    finish = true;
  }

}
    // ------------------------------
    // while loop ends
    // ------------------------------

// step 20:
// to run the program execute node script.js on the terminal.
