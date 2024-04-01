const displayCalculation = document.querySelector<HTMLHeadingElement>(".displayNumber--heading");
const pressNumber = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--number");
const clearButton = document.querySelector<HTMLButtonElement>(".userOptions-row--clear");
const dotButton = document.querySelector<HTMLButtonElement>(".userOptions-row--dot");
const postiveNegativeButton = document.querySelector(".userOptions-row--pos-neg");
const pressOperator = document.querySelectorAll<HTMLButtonElement>(".userOptions-row--operator");


// let storeNumbers : number[] = [];

let numberArray : number[] = [];


if(!displayCalculation || !pressNumber || !clearButton || !dotButton || !postiveNegativeButton || !pressOperator) { //This checks if the query selectors are working, if not then a message will pop up
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

    if(displayCalculation.innerText.length < 13) { //Checks the length of the innertext if it is below 15 then run
      displayCalculation.innerText += getNumber.value;
  
    } else {
      displayCalculation.innerText = "ERROR CANNOT LOAD MORE!";
    }

  console.log(getNumber.value);

  
}

const chosenOperator = (event: Event) => {

  const getOperator = event.target as HTMLButtonElement;



  if(getOperator.value === "+") {

    addNumbers();
    console.log("add has been run");
    

  } else if(getOperator.value === "-") {
    console.log("The - sign has been added");

  } else if(getOperator.value === "*") {
    console.log("The * sign has been added");

  } else if(getOperator.value === "/") {
    console.log("The / sign has been added");

  } else if(getOperator.value === "=") {
    console.log("The / sign has been added");

  }  else {
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


const addNumbers = () => {
  
  let total : number = 0;

  if(numberArray.length < 1) {
   

    numberArray.push(Number(displayCalculation.innerText));

    displayCalculation.innerText = displayCalculation.innerText + "+";

    let splitOperator1 = displayCalculation.innerText.split("+");
    numberArray.push(Number(splitOperator1[1]));


    console.log(`number Array length ${numberArray.length}`);
    

    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator1}`);
    console.log("IF IS FIRING");

  } else {

    let splitOperator2 = displayCalculation.innerText.split("+");
    numberArray[1] = (Number(splitOperator2[1]));;


    total = numberArray[0] + numberArray[1];

    numberArray[0] = total;

    displayCalculation.innerText = total.toString();

    displayCalculation.innerText = displayCalculation.innerText + "+";
    console.log(`number Array ${numberArray}`);
    console.log(`split operator Array ${splitOperator2}`);
    console.log("total is = " + total);
  
    console.log("ELSE IS FIRING");
  
  }

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
  
  body?.setAttribute("style", "height: 100%; width: 100vw; height: 100vh; background-size: cover; background-repeat:no-repeat; background-image: linear-gradient(to bottom, #99ccff, #8ad4f5, #8dd9e5, #9ddbd5, #b2dcc8);");
  loader?.setAttribute("style", "display: none;");
  display?.setAttribute("style", "display: block");
  display2?.setAttribute("style", "display: block");

}

window.onload = () => {
  
  onPageLoad();
}