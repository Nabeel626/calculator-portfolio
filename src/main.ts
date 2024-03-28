const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const pressNumber = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--number");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");

const storeNumbers : string[] = [];


if(!displayCalculation || !pressNumber || !clearButton || !storeNumbers) { //This checks if the query selectors are working, if not then a message will pop up
  throw new Error("Issue with selector!");
}

let clearDisplay = () => { // clear Function to clear the calculator back to 0

  displayCalculation.innerText = "0";

  console.log("This has been clicked!", displayCalculation); 
  
}


const numberDisplay = (event: Event) => { //number Display function adds the number to main heading so that it can be seen
  
  const getNumber = event.target as HTMLButtonElement;
  
  if(displayCalculation.innerText === "0") {
    displayCalculation.innerText = "";
  }

    if(storeNumbers.length <= 15 ) {
      storeNumbers.push(getNumber.value);
      displayCalculation.innerText += storeNumbers.length;
  
    } else {
  
      displayCalculation.innerText == "ERROR";
    }

  console.log(getNumber.value);
  console.log(storeNumbers);
  

}


clearButton.addEventListener("click", clearDisplay) // clear function

pressNumber.forEach((popUpNumber) => { //Loop through the array of button numbers stored when clicked

  popUpNumber.addEventListener("click", numberDisplay);

});