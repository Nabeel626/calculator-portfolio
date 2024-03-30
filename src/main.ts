const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const pressNumber = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--number");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");
const dotButton = document.querySelector<HTMLButtonElement>(".userOptions-row--dot");
const postiveNegativeButton = document.querySelector(".userOptions-row--pos-neg");


//Main Fucntions
const equalButton = document.querySelector<HTMLButtonElement>(".userOptions-row--equals");

const addButton = document.querySelector<HTMLButtonElement>(".userOptions-row--add");

//add 
//minus 
//times 
//divide


let storeNumbers : number[] = [];


if(!displayCalculation || !pressNumber || !clearButton || !dotButton) { //This checks if the query selectors are working, if not then a message will pop up
  throw new Error("Issue with selector!");
}

let clearDisplay = () => { // clear Function to clear the calculator back to 0

  displayCalculation.innerText = "0";

  dotButton.disabled = false;

  console.log("This has been clicked!", displayCalculation); 
  
}


const numberDisplay = (event: Event) => { //number Display function adds the number to main heading so that it can be seen
  
  const getNumber = event.target as HTMLButtonElement;
  
  if(displayCalculation.innerText === "0") {
    displayCalculation.innerText = "";
  }

    if(displayCalculation.innerText.length < 15) { //Checks the length of the innertext if it is below 15 then run
      storeNumbers.push(parseInt(getNumber.value));
      displayCalculation.innerText += getNumber.value;
  
    } else {
      displayCalculation.innerText = "ERROR CANNOT LOAD MORE!";
    }

  console.log(getNumber.value);
  console.log(storeNumbers);
  
}

const addDotFunction = (event: Event) => {

  const getDot = event.target as HTMLButtonElement;

  displayCalculation.innerText += getDot.value; 

  if(displayCalculation.innerText.endsWith(".")) {
      
    dotButton.disabled = true;
    
  }

}


const positiveNegativeFunction = () => {

  if(parseInt(displayCalculation.innerText) > 0) {
    displayCalculation.innerText = "-" + displayCalculation.innerText;
  } 
  else {
    displayCalculation.innerText = displayCalculation.innerText.replace("-", "");
  }

}


// const addNumbers = (event: Event) => {
//   const getNumber = event.target as HTMLButtonElement;
//   let total : number = 0;

//   if((displayCalculation.innerText.length - 1) === parseInt("+")) {
    


//   } else {
    
//     total = parseInt(getNumber.value) + total;



    
//     displayCalculation.innerText += getNumber.value = "+";
//     total = parseInt(getNumber.value) + total;

//     console.log(total);

//     total = parseInt(displayCalculation.innerText) + total;
//   }

//   const stringWithNumbers = "Hello123World456";
// const stringWithoutNumbers = stringWithNumbers.split('').filter(char => isNaN(parseInt(char))).join('');
// console.log(stringWithoutNumbers);

// }




clearButton.addEventListener("click", clearDisplay); //clear function
dotButton?.addEventListener("click", addDotFunction); //add a decimal function

postiveNegativeButton?.addEventListener("click", positiveNegativeFunction); //positive or negative function



// addButton?.addEventListener("click", addNumbers); //add function



pressNumber.forEach((popUpNumber) => { //Loop through the array of button numbers stored when clicked

  popUpNumber.addEventListener("click", numberDisplay);

});