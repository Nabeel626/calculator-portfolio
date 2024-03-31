const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const pressNumber = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--number");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");
const dotButton = document.querySelector<HTMLButtonElement>(".userOptions-row--dot");
const postiveNegativeButton = document.querySelector(".userOptions-row--pos-neg");
const pressOperator = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--operator");
const equalsButton = document.querySelector<HTMLButtonElement>(".userOptions-row--equals");


let storeNumbers : number[] = [];


if(!displayCalculation || !pressNumber || !clearButton || !dotButton || !postiveNegativeButton || !pressOperator || !equalsButton) { //This checks if the query selectors are working, if not then a message will pop up
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

    if(displayCalculation.innerText.length < 14) { //Checks the length of the innertext if it is below 15 then run
      displayCalculation.innerText += getNumber.value;
  
    } else {
      displayCalculation.innerText = "ERROR CANNOT LOAD MORE!";
    }

  console.log(getNumber.value);
  console.log(storeNumbers);
  
}

const chosenOperator = (event: Event) => {

  const getOperator = event.target as HTMLButtonElement;



  if(getOperator.value === "+") {
    // console.log("The + sign has been added");



    // if(storeNumbers.length < 2) {

    //   console.log(addNumbers(storeNumbers[0], storeNumbers[1]));
      
            

    // } else {
    //   storeNumbers.length = 0;
    // }
    

    // addNumbers();

  } else if(getOperator.value === "-") {
    console.log("The - sign has been added");

  } else if(getOperator.value === "*") {
    console.log("The * sign has been added");

  } else if(getOperator.value === "/") {
    console.log("The / sign has been added");

  } else {
    console.log("No operator has been selected!");
    
  }

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


const addNumbers = (num1 : number, num2 : number) => {

  displayCalculation.innerText = displayCalculation.innerText + "+";



  return num1 + num2;
  

  // previousNumber = parseInt(displayCalculation.innerText);

  // if(currrentNumber == 0) {

  //   displayCalculation.innerText = "0";
  //   currrentNumber = parseInt(displayCalculation.innerText);

  //   total = previousNumber + currrentNumber;
  //   console.log(total);

  //   currrentNumber = 0;
    

  // }

  // console.log(previousNumber);
  // console.log(currrentNumber);
  

  // const addNumberDisplay = event.target as HTMLButtonElement;
  // const numberArray : number[] = [];
  
  // let total : number = 0;

  // numberArray[0] = parseInt(displayCalculation.innerText);

  // // numberArray[1] = parseInt(displayCalculation.innerText);

  // total = numberArray[0] + numberArray[1];


  // console.log(total + " ADD FUNCTION IN PROGRESS");

  // displayCalculation.innerText = displayCalculation.innerText + "+";
  // let bob = displayCalculation.innerText.split("+");
  // bob = bob + displayCalculation.innerText;

  // for(let i = 0; i < 12; i++) {
  //   bob = parseInt(bob) + bob;
  // }

  // let total = bob[0] + bob[1];


  // console.log(bob[0] + bob[1]);
  // console.log(total);
  
  
  
  

  // if((displayCalculation.innerText.length - 1) === parseInt("+")) {
    


  // } else {
    
  //   total = parseInt(getNumber.value) + total;



    
  //   displayCalculation.innerText += getNumber.value = "+";
  //   total = parseInt(getNumber.value) + total;

  //   console.log(total);

  //   total = parseInt(displayCalculation.innerText) + total;
  // }

//   const stringWithNumbers = "Hello123World456";
// const stringWithoutNumbers = stringWithNumbers.split('').filter(char => isNaN(parseInt(char))).join('');
// console.log(stringWithoutNumbers);

}

clearButton.addEventListener("click", clearDisplay); //clear function
dotButton?.addEventListener("click", addDotFunction); //add a decimal function

postiveNegativeButton?.addEventListener("click", positiveNegativeFunction); //positive or negative function


pressNumber.forEach((popUpNumber) => { //Loop through the array of button numbers stored when clicked

  popUpNumber.addEventListener("click", numberDisplay);

});

pressOperator.forEach((popUpOperator) => { //Loop through the array of operator buttons stored when clicked

  popUpOperator.addEventListener("click", chosenOperator);

});


const body = document.querySelector("body");

const onPageLoad = () => {
  let load : number = 0;
  
  body?.setAttribute("style", "background-color: #99ccff;");

  load = setTimeout(showPage, 6500); //this determines the loading time which is 3 seconds
}


const showPage = () => {
  const loader = document.querySelector("#loadingSection");
  const display = document.querySelector(".displayNumber");
  const display2 = document.querySelector(".userOptions");
  
  body?.setAttribute("style", "height: 100%; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);");
  loader?.setAttribute("style", "display: none;");
  display?.setAttribute("style", "display: block");
  display2?.setAttribute("style", "display: block");

}

window.onload = () => {
  
  onPageLoad();
}