const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const pressNumber = document.querySelector<HTMLButtonElement>("button");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");


if(!displayCalculation || !pressNumber || !clearButton) { //This checks if the query selectors are working, if not then a message will pop up
  throw new Error("Issue with selector!");
}

let clearDisplay = () => { // clear Function to clear the calculator back to 0

  displayCalculation.innerText = "0";

  console.log("This has been clicked!", displayCalculation); 
  

}


clearButton.addEventListener("click", clearDisplay) // clear function